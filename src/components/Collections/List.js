import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {
    Buttons,
    Forms,
    Tables,
    Texts,
    Loaders,
    Layouts,
    Icons,
} from '../../'

const Header = ({response}) => <div>
    <Texts.Heading appendClassname={'text-center'}>
        {response.meta.plural || ''}
    </Texts.Heading>

    <div className={'button-action'}>
        <Buttons.Button type={'primary'}>Add {response.meta.singular}</Buttons.Button>
    </div>
</div>

export const Search = ({search, onSearch}) => {
    return <div className={'flex justify-end'}>
        <div className={'w-1/3'}>
            <Forms.Input
                id={'search'}
                placeholder={'Search'}
                appendClassname={'mb-4'}
                value={search}
                onChange={(event) => onSearch(event.target.value)}/>
        </div>
    </div>
}

export const TableHead = ({sort, fields, handleSort}) => <thead>
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

export const TableBody = ({data, url, items, fields, collection, onDelete}) => {
    // const Delete = (id) => {
    //     axios.delete(url + '/' + id)
    //         .then(response => {
    //             const allData = items.filter(item => item.id !== id)
    //             onDelete(allData)
    //         }).catch(err => console.log(err))
    // }

    return <tbody>
    {
        data.map((item, index) => <tr key={index}>
                {fields.map((field, fieldIndex) => <td key={fieldIndex}>{item[field.name]}</td>)}
                <td width={'152'}>
                    <Buttons.Button appendClassname={'button-icon'}>
                        <Icons.Icon name={'eye'} className={'text-green-400 w-4'}/>
                    </Buttons.Button>
                    <Buttons.Button appendClassname={'button-icon'}>
                        <Icons.Icon name={'pencil'} className={'text-orange-400 w-4'}/>
                    </Buttons.Button>
                    <Buttons.Button appendClassname={'button-icon'}>
                        <Icons.Icon name={'x-circle'} className={'text-red-400 w-4'}/>
                    </Buttons.Button>
                </td>
            </tr>,
        )
    }
    </tbody>
}

export const Pagination = ({meta, onPage}) => <div className={'flex justify-between mt-6'}>
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
    const [isLoading, setLoading] = useState(true)
    const [response, setResponse] = useState({})

    useEffect(() => {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                setResponse(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <div className={'h-64 flex justify-center items-center'}>
            <Loaders.Circle/>
        </div>
    } else {
        return <Layouts.Container>
            <Header response={response}/>

            <Search/>

            <Tables.Table>
                <Tables.Table>
                    {/*<TableHead sort={sort} fields={fields} handleSort={handleSort}/>*/}

                    <TableBody
                        data={response.data}
                        // url={url}
                        // items={items}
                        // onDelete={newItems => setItems(newItems)}
                        // fields={fields}
                        // collection={collection}
                    />
                </Tables.Table>
            </Tables.Table>

            {/*<Pagination/>*/}
        </Layouts.Container>
    }
}

List.propTypes = {
    /**
     * The endpoint
     */
    endpoint: PropTypes.string
}