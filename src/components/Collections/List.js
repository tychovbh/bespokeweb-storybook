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
                <td className={'storybook-list-table-body-actions'}>
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

const ListHeader = ({meta, search, onSearch}) => <>
    <Texts.Heading appendClassname={'text-center mb-8'}>
        {meta.plural || ''}
    </Texts.Heading>

    <div className={'flex justify-between mb-4'}>
        <Buttons.Button type={'primary'}>
            <Icons.Icon name={'plus'}/> {'Add ' + meta.singular}
        </Buttons.Button>

        <div className={'w-1/3 flex items-center'}>
            <Forms.Input
                id={'search'}
                placeholder={'Search'}
                value={search}
                onChange={(event) => onSearch(event.target.value)}
            />
        </div>
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
        url,
    }) => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [params, setParams] = useState({
        search: ''
    })

    const Request = (params = {}) => {
        Axios.get(url, {
            params: {
                ...params,
                paginate: '10',
            },
        }).then(response => {
            setData(response.data)
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

    console.log(params)

    return <div className={'mt-12'}>
        {/*{bulk_import && <Import collection={collection} onImport={() => setLoading(true)}/>}*/}

        <div>
            <ListHeader
                collection={data.collection}
                meta={data.meta}
                search={params.search}
                onSearch={search => {
                    setParams({...params, search})
                    Request({...params, search})
                }}
            />

            <div className={'w-full overflow-x-auto'}>
                <Tables.Table appendClassname={'storybook-list-table'}>
                    {/*<ListTableHead sort={params.sort} fields={data.fields} handleSort={handleSort}/>*/}
                    <ListTableBody
                        url={url}
                        items={data.data}
                        onDelete={newItems => data.data = newItems}
                        fields={data.fields}
                        collection={data.collection}/>
                </Tables.Table>
            </div>

            {/*<ListPagination meta={data.meta}/>*/}
        </div>
    </div>
}

List.propTypes = {
    /**
     * The endpoint
     */
    endpoint: PropTypes.string
}
