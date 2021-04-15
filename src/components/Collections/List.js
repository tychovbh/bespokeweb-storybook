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
    Collections,
    Layouts
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

const TableBody = ({items, fields, info, setDeleteModal, collection}) => {
    const Delete = (item) => {
        setDeleteModal(item)
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
                {fields.map((field, fieldIndex) => <td key={`${index}-${fieldIndex}`}>{item[field.name]}</td>)}
                <td className={'storybook-list-table-body-actions'}>
                    <Buttons.ButtonLink href={`/${collection}/${item.id}`} appendClassname={'button-icon'}>
                        <Icons.Icon name={'eye'} className={'text-green-400 w-4'}/>
                    </Buttons.ButtonLink>
                    <Buttons.ButtonLink href={`/${collection}/${item.id}/edit`} appendClassname={'button-icon'}>
                        <Icons.Icon name={'pencil'} className={'text-orange-400 w-4'}/>
                    </Buttons.ButtonLink>
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

const Header = ({info = {}, search, onSearch, collection, relation, buttons}) => {
    return <>
        {
            !relation.name && <>
                <Collections.Buttons buttons={buttons}>
                    <Buttons.ButtonLink appendClassname={'mr-4'} href={`/${collection}/import`}>
                        <Icons.Icon name={'cloud-upload'} className={'mr-2 w-5'}/>
                        Bulk import
                    </Buttons.ButtonLink>
                    <Buttons.ButtonLink type={'success'} href={`/${collection}/create`}>
                        <Icons.Icon name={'plus'} className={'mr-2 w-5'}/>
                        create
                    </Buttons.ButtonLink>
                </Collections.Buttons>
                <Collections.Title>Records</Collections.Title>
            </>
        }

        <Layouts.Container>
            <div className={'storybook-collections-list-toolbar'}>
                <label htmlFor={'search'} className={'w-5 mx-3 cursor-pointer'}>
                    <Icons.Icon name={'search'}/>
                </label>

                <Forms.Input
                    id={'search'}
                    className={'storybook-collections-list-search'}
                    placeholder={'Search'}
                    value={search}
                    onChange={(event) => onSearch(event.target.value)}
                />
            </div>
        </Layouts.Container>
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

const DeleteModel = ({base_url, collection, field, open, onClose, onDelete, params = {}}) => {
    const [deleteField, setDeleteField] = useState('')

    const Delete = (() => {
        // TODO receive error when can't delete e.g. having a relation
        Axios.delete(`${base_url}/${collection}/${field.id}`, {
            params,
        })
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

const Item = ({base_url, collection, params, relation, buttons}) => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [searching, setSearching] = useState(false)
    const [filters, setFilters] = useState({
        search: '',
        page: 1,
        sort: '',
    })

    const [deleteModal, setDeleteModal] = useState({
        open: false,
    })

    // Request is done after the user stops typing
    useEffect(() => {
        if (filters.search) {
            const timeoutId = setTimeout(() => Request(filters), 500)
            return () => clearTimeout(timeoutId)
        }
    }, [filters.search])

    const Request = (filters = {}) => {
        Axios.get(`${base_url}/${collection}`, {
            params: {
                ...filters,
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

        if (filters.sort) {
            const sort = filters.sort.split(' ')
            if (sort[0] !== name || sort[1] === 'asc') {
                type = 'desc'
            }
        }

        setFilters({...filters, sort: name + ' ' + type})
        Request({...filters, sort: name + ' ' + type})
    }

    useEffect(() => {
        Request()
    }, [])

    if (isLoading) {
        return <Loading/>
    }
    return <>
        <Header
            relation={relation}
            collection={collection}
            buttons={buttons}
            info={data.info}
            search={filters.search}
            onSearch={search => {
                setFilters({...filters, search, page: 1})
                setSearching(true)
            }}
        />
        <DeleteModel
            params={filters}
            base_url={base_url}
            collection={collection}
            open={deleteModal.open}
            field={deleteModal.field}
            onClose={() => setDeleteModal({...deleteModal, open: !deleteModal.open})}
            onDelete={() => {
                setSearching(true)
                Request(filters)
            }}
        />

        <Layouts.Container>
            <Tables.Table>
                <TableHead sort={filters.sort} fields={data.index} onSort={name => handleSort(name)}/>
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
                        collection={collection}
                        info={data.info}
                        items={data.data}
                        fields={data.index}
                        setDeleteModal={field => setDeleteModal({...deleteModal, open: !deleteModal.open, field})}
                    />
                }
            </Tables.Table>

            <Pagination meta={data.meta} onPage={page => {
                setFilters({...filters, page})
                Request({...filters, page})
            }}/>
        </Layouts.Container>
    </>
}
export const List = ({base_url, collection, params, relation = {}, buttons}) => {
    const [visible, setVisible] = useState(!relation.name)

    const ListItem = () => <Item
        base_url={base_url}
        collection={collection}
        params={params}
        buttons={buttons}
        relation={relation}/>

    if (!relation.name) {
        return <ListItem/>
    }

    return <div className={'border-t'}>
        <div className={'lists-toggle-bar'}>
            <Buttons.Button type={'dark'} onClick={() => setVisible(!visible)}>
                <div className={'lists-toggle-bar-button'}>
                    Relation: {relation.label} &nbsp;
                    <Icons.Icon name={visible ? 'chevron-down' : 'chevron-up'} className={'w-8'}/>
                </div>
            </Buttons.Button>
            {visible && <ListItem/>}
        </div>
    </div>
}

List.propTypes = {
    /**
     * The base url
     */
    base_url: PropTypes.string,

    /**
     * The collection name
     */
    collection: PropTypes.string,

    /**
     * The request params added to all requests
     */
    params: PropTypes.object,

    /**
     * Is a relation list true/false
     */
    relation: PropTypes.bool,

    /**
     * The custom buttons added to the topbar
     */
    buttons: PropTypes.func
}
