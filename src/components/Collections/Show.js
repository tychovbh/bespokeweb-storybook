import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Loaders, Lists, Collections, Texts, Buttons, Modals} from 'bespokeweb-storybook'

const Something = ({data}) => {
    if (Array.isArray(data)) {
        return <>
            {data.map((item, index) => <Something key={index} data={item}/>)}
        </>
    }

    const [open, setOpen] = useState(false)

    return <>
        <button onClick={() => setOpen(!open)}>open</button>
        <Lists.Container open={open}>
            {
                Object.keys(data).map((key, index) => {
                    const value = data[key]
                    return <Lists.Row key={index}>
                        <Lists.Column type={'dt'}>{key}</Lists.Column>
                        <Lists.Column>
                            {['object', 'array'].includes(typeof value) ? JSON.stringify(value) : value}
                        </Lists.Column>
                    </Lists.Row>
                })
            }
        </Lists.Container>
    </>
}

const List = ({title, fields, data, setModal}) => <Lists.Container>
    <Lists.Header>
        <Texts.Heading type={'h3'}>{title}</Texts.Heading>
    </Lists.Header>
    {
        fields.map((field, index) => {
                const Template = templates[field.type] || templates.default
                return <Lists.Row key={index}>
                    <Lists.Column type={'dt'}>{field.label}</Lists.Column>
                    <Lists.Column>
                        <Template field={field} data={data} setModal={setModal}/>
                    </Lists.Column>
                </Lists.Row>
            },
        )
    }

</Lists.Container>

const Json = ({field, data, setModal}) => {
    console.log(field, data)
    return <div>
        <Buttons.Button type={'dark'} onClick={() => {
            setModal({open: true, content: () => <div>
                    <p>Data:</p>
                    <Something data={JSON.parse(data[field.name])}/>
                </div>, params: {field}})
        }}>open</Buttons.Button>
    </div>
}

const templates = {
    default: ({field, data}) => <>{data[field.name] ?? ''}</>,
    json: Json
}

const ShowModal = ({field, onClose, children, open}) => <Modals.Modal open={open}>
    <Modals.Container>
        <Modals.Body>
            <Texts.Heading type={'h3'} appendClassname={'mb-2'}>{field.label}</Texts.Heading>
            {children}
        </Modals.Body>
        <Modals.Footer>
            <Buttons.Button type={'default'} onClick={onClose}>Close</Buttons.Button>
        </Modals.Footer>
    </Modals.Container>
</Modals.Modal>

export const Show = ({base_url, database, collection, id, params = {}}) => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [modal, setModal] = useState({
        open: false,
        content: null,
        params: {}
    })

    useEffect(() => {
        setLoading(true)
        Axios.get(`${base_url}/${collection}/${id}`, {params})
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


    return <>
        {modal.open && <ShowModal
            {...modal.params}
            open={modal.open}
            onClose={() => setModal({
                open: false,
                content: null,
                params: {}
            })}>
            {modal.content && modal.content()}
        </ShowModal>}
        <div className={'storybook-collections-show'}>
            <List
                title={data.info.label || ''}
                fields={data.show}
                setModal={setModal}
                data={data.data}/>

            {
                data.relations.map((relation, index) => {
                    return <Collections.List
                        key={index}
                        relation
                        base_url={base_url}
                        collection={`${database}/${relation.name}`}
                        params={{
                            ...params,
                            [relation.reference]: data.data[relation.column],
                            additionals: ['index', 'info'],
                        }}
                    />
                })
            }
        </div>
    </>
}
