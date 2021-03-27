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

const TableHead = ({sort, fields, onSort}) => <thead>
<tr>
    {fields.map((field, index) => {
        const sortClass = sort.name === field.name ? 'storybook-collections-list-th-sort-' + sort.type : ''

        return <th key={index} onClick={() => onSort(field.name)} className={`storybook-collections-list-th-sort`}>
            <div className={'storybook-collections-list-th-sort-body'}>
                {field.label}
                <div className={'storybook-collections-list-th-sort-icons'}>
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

const TableBody = ({endpoint, items, fields, onDelete, meta}) => {
    const Delete = (id) => {
        Axios.delete(endpoint + '/' + id)
            .then(response => {
                const allData = items.filter(item => item.id !== id)
                onDelete(allData)
            }).catch(err => console.log(err))
    }
    if (!items.length) {
        return <tbody>
        <tr>
            <td colSpan={fields.length}><p>Er zijn geen {meta.plural} gevonden</p></td>
        </tr>
        </tbody>
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

const Header = ({meta, search, onSearch}) => <>
    <Texts.Heading appendClassname={'text-center mb-8'}>
        {meta.plural || ''}
    </Texts.Heading>

    <div className={'flex justify-between mb-4'}>
        <Buttons.Button type={'primary'}>
            <Icons.Icon name={'plus'} className={'mr-2'}/> {'Add ' + meta.singular}
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

const Pagination = ({meta, onPage}) => <div className={'flex justify-between mt-6'}>
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

export const List = ({endpoint}) => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [params, setParams] = useState({
        search: '',
        page: 1,
        sort: ''
    })

    const Request = (params = {}) => {
        Axios.get(endpoint, {
            params: {
                ...params,
                paginate: '10',
            },
        }).then(response => {
            setData(response.data)
            setLoading(false)
        })
    }

    const handleSort = (name) => {
        let type = 'asc'

        if (params.sort) {
            const sort = params.sort.split(' ')
            if (sort[0] !== name || sort[1] === 'asc') {
                type = 'desc'
            }
        }

        setParams({...params, sort: name + ' ' + type})
        Request({...params, sort: name + ' ' + type})
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
            <Header
                collection={data.collection}
                meta={data.meta}
                search={params.search}
                onSearch={search => {
                    setParams({...params, search, page: 1})
                    Request({...params, search, page: 1})
                }}
            />

            <Tables.Table appendClassname={'storybook-list-table'}>
                <TableHead sort={params.sort} fields={data.fields} onSort={name => handleSort(name)}/>
                <TableBody
                    meta={data.meta}
                    endpoint={endpoint}
                    items={data.data}
                    onDelete={newItems => setData({...data, data: newItems})}
                    fields={data.fields}
                    collection={data.collection}/>
            </Tables.Table>

            <Pagination meta={data.meta} onPage={page => {
                setParams({...params, page})
                Request({...params, page})
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
