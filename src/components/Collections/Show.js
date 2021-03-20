import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Loaders, Buttons, Lists, Collections, Texts} from '../../'

export const Show = ({match}) => {
    const [item, setItem] = useState({})
    const [fields, setFields] = useState([])
    const [meta, setMeta] = useState({})
    const [relations, setRelations] = useState([])
    const {id, collection} = match.params
    const url = `/api/${collection}/${id}`

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        Axios.get(url)
            .then(response => {
                setItem(response.data.data)
                setFields(response.data.fields)
                setMeta(response.data.meta)
                setRelations(response.data.relations || [])
                setLoading(false)
            })
    }, [id, collection])

    if (isLoading) {
        return <div className={'h-64 flex justify-center items-center'}>
            <Loaders.Circle />
        </div>
    }

    return <div>
        <div className={'collections-buttons'}>
            {/*<Link to={`/dashboard/${collection}`}>*/}
                <Buttons.Button type={'success'}>Terug</Buttons.Button>
            {/*</Link>*/}
            {/*<Link to={`/dashboard/${collection}/${id}/edit`}>*/}
                <Buttons.Button type={'warning'}>Edit</Buttons.Button>
            {/*</Link>*/}
        </div>

        <Lists.Container>
            <Lists.Header>
                <Texts.Heading type={'h3'}>{meta.singular || ''}</Texts.Heading>
            </Lists.Header>
            {fields.map((field, index) => <Lists.Row key={index}>
                <Lists.Column type={'dt'}>{field.label}</Lists.Column>
                <Lists.Column>{item[field.name] ?? ''}</Lists.Column>
            </Lists.Row>)}

        </Lists.Container>

        {
            relations.map((relation, index) => {
                return <Collections.List
                    collection={relation.name}
                    url={relation.index}
                    create_url={relation.create}
                    key={index}
                    bulk_import={false}
                />
            })
        }
    </div>
}
