import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import {
    Buttons,
    Forms,
    Tables,
    Texts,
    Loaders,
    Layouts,
    Icons,
} from '../../'

const ListTableHead = ({sort, fields, handleSort}) => <thead>
<tr>
    {fields.map((field, index) => {
        const sortClass = sort.name === field.name ? 'th-sort-' + sort.type : ''
        return <th key={index} onClick={() => handleSort(field)} className={`th-sort ${sortClass}`}>
            <div className={'th-sort-body'}>
                {field.label}
                <div className={'th-sort-icons'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M5 15l7-7 7 7"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M19 9l-7 7-7-7"/>
                    </svg>
                </div>
            </div>
        </th>
    })}
    <th/>
</tr>
</thead>

const ListTableBody = ({url, items, fields, collection, onDelete}) => {
    const Delete = (id) => {
        Axios.delete(url + '/' + id)
            .then(response => {
                const allData = items.filter(item => item.id !== id)
                onDelete(allData)
            }).catch(err => console.log(err))
    }

    return <tbody>
    {
        items.map((item, index) => <tr key={index}>
                {fields.map((field, fieldIndex) => <td key={fieldIndex}>{item[field.name]}</td>)}
                <td width={'152'}>
                    {/*<Link to={`/dashboard/${collection}/${item.id}`}>*/}
                    <Buttons.Button appendClassname={'button-icon'}>
                        <Icons.Icon name={'eye'} className={'text-green-400 w-4'}/>
                    </Buttons.Button>
                    {/*</Link>*/}
                    {/*<Link to={`/dashboard/${collection}/${item.id}/edit`}>*/}
                    <Buttons.Button appendClassname={'button-icon'}>
                        <Icons.Icon name={'pencil'} className={'text-orange-400 w-4'}/>
                    </Buttons.Button>
                    {/*</Link>*/}
                    <Buttons.Button onClick={() => Delete(item.id)} appendClassname={'button-icon'}>
                        <Icons.Icon name={'x-circle'} className={'text-red-400 w-4'}/>
                    </Buttons.Button>
                </td>
            </tr>,
        )
    }
    </tbody>
}

const Loading = () => <div className={'h-64 flex justify-center items-center'}>
    <Loaders.Circle/>
</div>

const ListSearch = ({search, onSearch}) => <div className={'flex justify-center'}>
    <div className={'w-1/2'}>
        <Forms.Input
            id={'search'}
            placeholder={'Search'}
            appendClassname={'mb-4'}
            value={search}
            onChange={(event) => onSearch(event.target.value)}/>
    </div>
</div>

const ListHeader = ({meta, collection, create_url}) => <>
    <Texts.Heading appendClassname={'text-center'}>
        {meta.plural || ''}
    </Texts.Heading>

    <div className={'button-action'}>
        {/*<Link to={create_url || `/dashboard/` + collection + `/create`}>*/}
        <Buttons.Button type={'primary'}>Add {meta.singular}</Buttons.Button>
        {/*</Link>*/}
    </div>
</>

const ListPagination = ({meta, onPage}) => <div className={'flex justify-between mt-6'}>
    <div>
        <p>
            Showing <span className={'font-bold'}>{meta.from}</span> to <span
            className={'font-bold'}>{meta.to}</span> of <span className={'font-bold'}>{meta.total}</span>
        </p>
    </div>
    <div>
        {
            meta.links.filter(link => link.url).map((link, index) => {
                let page = link.url.split('=')[1]

                return <Buttons.Button
                    key={index}
                    type={'light'}
                    appendClassname={`mx-1 ${link.active && 'page-active'} ${link.url ? '' : 'opacity-50'}`}
                    onClick={() => onPage(page)}
                >
                    <span dangerouslySetInnerHTML={{__html: link.label}}/>
                </Buttons.Button>
            })
        }
    </div>
</div>

export const List = (
    {
        match = {params: {}},
        url,
        collection,
        create_url,
        bulk_import = true,
    }) => {
    const [items, setItems] = useState([])
    const [fields, setFields] = useState([])
    const [meta, setMeta] = useState({})
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState({
        name: '',
        type: '',
    })
    const [isLoading, setLoading] = useState(true)
    const [page, setPage] = useState('')

    collection = collection || match.params.collection
    url = url || '/api/' + collection


    const Request = (params = {}) => {
        Axios.get(url, {
            params: {
                paginate: '10',
                ...params,
            },
        }).then(response => {
            setItems(response.data.data)
            setFields(response.data.fields)
            setMeta(response.data.meta)
            setLoading(false)
        })
    }

    const handleSort = (field) => {
        let sortType = 'desc'

        if (sort.name !== field.name || sort.type === 'desc') {
            sortType = 'asc'
        }

        setSort({
            name: field.name,
            type: sortType,
        })

        Request({
            page,
            sort: field.name + ' ' + sortType,
            search,
        })
    }


    useEffect(() => {
        Request()
    }, [])

    if (isLoading) {
        return <Loading/>
    }

    return <div className={'mt-12'}>
        {/*{bulk_import && <Import collection={collection} onImport={() => setLoading(true)}/>}*/}

        <div>
            <ListHeader collection={collection} meta={meta} create_url={create_url}/>

            <ListSearch onSearch={search => {
                setSearch(search)
                setPage('1')
                Request({
                    page: '1',
                    sort: sort.name + ' ' + sort.type,
                    search,
                })
            }}/>

            <Tables.Table>
                <ListTableHead sort={sort} fields={fields} handleSort={handleSort}/>
                <ListTableBody
                    url={url}
                    items={items}
                    onDelete={newItems => setItems(newItems)}
                    fields={fields}
                    collection={collection}/>
            </Tables.Table>

            <ListPagination meta={meta} onPage={page => {
                setPage(page)
                Request({
                    page,
                    sort: sort.name + ' ' + sort.type,
                    search,
                })
            }}/>
        </div>
    </div>
}

List.propTypes = {
    /**
     * The endpoint
     */
    endpoint: PropTypes.string
}