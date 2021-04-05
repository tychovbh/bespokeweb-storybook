import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import {
    Buttons,
    Forms,
    Tables,
    Texts,
    Loaders,
    Icons,
    Modals,
} from 'bespokeweb-storybook'

const TableHead = ({sort, fields, onSort}) => <thead>
<tr>
    {fields.map((field, index) => {
        let sortClass
        sort = sort && sort.toString().split(' ')

        if (sort.length) {
            if (sort[0] === field.name) {
                sortClass = 'storybook-collections-list-th-sort-' + sort[1]
            }
        }

        return <th key={index} onClick={() => onSort(field.name)}
                   className={`storybook-collections-list-th-sort ${sortClass}`}>
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

const TableBody = ({deleteUrl, items, fields, onDelete, info, setDeleteModal}) => {
    const Delete = (item) => {
        setDeleteModal(item)

        // Axios.delete(deleteUrl + id)
        //     .then(response => {`
        //         const allData = items.filter(item => item.id !== id)
        //         onDelete(allData)
        //     }).catch(err => console.log(err))
    }

    if (!items.length) {
        return <tbody>
        <tr>
            <td colSpan={fields.length}><p>Er zijn geen {info.plural} gevonden</p></td>
        </tr>
        </tbody>
    }

    return <tbody>
    {
        items.map((item, index) => <tr key={index}>
                {fields.map((field, fieldIndex) => <td key={fieldIndex}>{item[field.name]}</td>)}
                <td className={'storybook-list-table-body-actions'}>
                    <Buttons.Button appendClassname={'button-icon'}>
                        <Icons.Icon name={'eye'} className={'text-green-400 w-4'}/>
                    </Buttons.Button>
                    <Buttons.Button appendClassname={'button-icon'}>
                        <Icons.Icon name={'pencil'} className={'text-orange-400 w-4'}/>
                    </Buttons.Button>
                    <Buttons.Button onClick={() => Delete(item)} appendClassname={'button-icon'}>
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

const Header = ({info = {}, search, onSearch, collection}) => {
    return <>
        <Texts.Heading appendClassname={'text-center mb-8'}>
            {info.label || ''}
        </Texts.Heading>

        <div className={'storybook-collections-list-toolbar'}>
            <div className={'w-3/5 flex items-center'}>
                <Icons.Icon name={'search'}  className={'w-5 mx-3'}/>

                <Forms.Input
                    id={'search'}
                    className={'storybook-collections-list-search'}
                    placeholder={'Search'}
                    value={search}
                    onChange={(event) => onSearch(event.target.value)}
                />
            </div>

            <div className={'m-2'}>
                <Buttons.Button type={'primary'} appendClassname={'mr-2'} href={`/${collection}/create`}>
                    <Icons.Icon name={'plus'} className={'mr-2'}/> {'Create new'}
                </Buttons.Button>

                <Buttons.ButtonLink type={'secondary'} href={`/${collection}/import`}>
                    <Icons.Icon name={'cloud-upload'} className={'mr-2'}/> Bulk import
                </Buttons.ButtonLink>
            </div>
        </div>
    </>
}

const Pagination = ({meta, onPage}) => <div className={'flex justify-between mt-6'}>
    <div>
        <p>
            Showing <span className={'font-bold'}>{meta.from || 0}</span> to <span
            className={'font-bold'}>{meta.to || 0}</span> of <span className={'font-bold'}>{meta.total}</span>
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

const DeleteModel = ({base_url, collection, field, open, onClose, onDelete}) => {
    const [deleteField, setDeleteField] = useState('')

    const Delete = (() => {
        // TODO receive error when can't delete e.g. having a relation
        Axios.delete(`${base_url}/${collection}/${field.id}`)
            .then(response => {
                onDelete()
                onClose()
                setDeleteField('')
            })
    })

    return <Modals.Modal open={open} onClose={onClose}>
        <Modals.Container>
            <Modals.Body>
                <Texts.Heading type={'h3'} appendClassname={'mb-2'}>Deleting</Texts.Heading>

                <Texts.Primary appendClassname={'mb-4'}>
                    To remove this record, type "DELETE" and press "Confirm"
                </Texts.Primary>

                <Forms.Input
                    placeholder={'DELETE'}
                    onChange={event => setDeleteField(event.target.value)}
                    value={deleteField}
                />
            </Modals.Body>

            <Modals.Footer>
                <Buttons.Button type={'default'} onClick={onClose} appendClassname={'mr-2'}>Close</Buttons.Button>

                <Buttons.Button type={'danger'} disabled={deleteField !== 'DELETE'} onClick={() => Delete()}>
                    Confirm
                </Buttons.Button>
            </Modals.Footer>
        </Modals.Container>
    </Modals.Modal>
}

export const List = ({base_url, collection, search}) => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [searching, setSearching] = useState(false)
    const [params, setParams] = useState({
        ...search,
        search: '',
        page: 1,
        sort: ''
    })

    const [deleteModal, setDeleteModal] = useState({
        open: false
    })

    // Request is done after the user stops typing
    useEffect(() => {
        if(params.search) {
            const timeoutId = setTimeout(() => Request(params), 500);
            return () => clearTimeout(timeoutId);
        }
    }, [params.search])

    const Request = (params = {}) => {
        Axios.get(`${base_url}/${collection}`, {
            params: {
                ...params,
                paginate: '10',
            },
        }).then(response => {
            setData(response.data)
            setLoading(false)
            setSearching(false)
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
        Request(params)
    }, [])

    if (isLoading) {
        return <Loading/>
    }

    return <div className={'mt-12'}>
        <div>
            <Header
                collection={collection}
                info={data.info}
                search={params.search}
                onSearch={search => {
                    setParams({...params, search, page: 1})
                    setSearching(true)
                }}
            />
            <DeleteModel
                base_url={base_url}
                collection={collection}
                open={deleteModal.open}
                field={deleteModal.field}
                onClose={() => setDeleteModal({...deleteModal, open: !deleteModal.open})}
                onDelete={() => {
                    setSearching(true)
                    Request(params)
                }}
            />

            <Tables.Table appendClassname={'storybook-list-table'}>
                <TableHead sort={params.sort} fields={data.index} onSort={name => handleSort(name)}/>
                {
                    searching &&
                    <tbody>
                    <tr className={'w-full'}>
                        <td colSpan={data.index.length + 1}><Loading/></td>
                    </tr>
                    </tbody>
                }
                {
                    !searching &&
                    <TableBody
                        info={data.info}
                        deleteUrl={`${base_url}/${collection}/`}
                        items={data.data}
                        onDelete={newItems => setData({...data, data: newItems})}
                        fields={data.index}
                        setDeleteModal={field => {
                            setDeleteModal({...deleteModal, open: !deleteModal.open, field})
                        }}
                        collection={data.collection}
                    />
                }
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
