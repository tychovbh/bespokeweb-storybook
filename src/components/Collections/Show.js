import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Loaders, Buttons, Lists, Collections, Texts} from '../../'

export const Show = ({base_url, collection, id}) => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        Axios.get(`${base_url}/api/${collection}/${id}`)
            .then(response => {
                setData(response.data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <div className={'h-64 flex justify-center items-center'}>
            <Loaders.Circle/>
        </div>
    }

    return <div className={'storybook-collections-show'}>
        <div className={'storybook-collections-show-buttons'}>
            {/*<Link to={`/dashboard/${collection}`}>*/}
            <Buttons.Button type={'success'}>Terug</Buttons.Button>
            {/*</Link>*/}
            {/*<Link to={`/dashboard/${collection}/${id}/edit`}>*/}
            <Buttons.Button type={'warning'}>Edit</Buttons.Button>
            {/*</Link>*/}
        </div>

        <Lists.Container>
            <Lists.Header>
                <Texts.Heading type={'h3'}>{data.meta.singular || ''}</Texts.Heading>
            </Lists.Header>
            {
                data.fields.map((field, index) => <Lists.Row key={index}>
                        <Lists.Column type={'dt'}>{field.label}</Lists.Column>
                        <Lists.Column>{data.data[field.name] ?? ''}</Lists.Column>
                    </Lists.Row>
                )
            }

        </Lists.Container>

        {
            data.relations.map((relation, index) => {
                console.log(relation)
                return <Collections.List
                    key={index}
                    base_url={base_url}
                    collection={relation.name}
                    search={{
                        person_id: id
                    }}
                />
            })
        }
    </div>
}
