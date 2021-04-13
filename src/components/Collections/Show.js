import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Loaders, Lists, Collections, Texts, Buttons, Modals, Icons, Forms} from 'bespokeweb-storybook'

const Json = ({value, setModal}) => {
    return <div>
        <Buttons.Button type={'dark'} onClick={() => {
            setModal({
                open: true, content: () => <div>
                    <ShowJson data={typeof value === 'string' ? JSON.parse(value) : value} setModal={setModal}/>
                </div>,
            })
        }}>open json</Buttons.Button>
    </div>
}

const templates = {
    default: ({value}) => <>{value ?? ''}</>,
    json: Json,
    jsonb: Json,
    tinyint: ({value}) => <Forms.Toggle value={Boolean(value)} disabled/>
}

const ShowJson = ({data, index, setModal}) => {
    if (Array.isArray(data)) {
        return <>
            {data.map((item, index) => <ShowJson key={index} index={index} data={item} setModal={setModal}/>)}
        </>
    }

    const [open, setOpen] = useState(false)

    return <>
        <div className={'lists-toggle-bar'}>
            <Buttons.Button type={'dark'} onClick={() => setOpen(!open)}>
                <div className={'lists-toggle-bar-button'}>
                open json &nbsp;<Icons.Icon name={open ? 'chevron-up' : 'chevron-down'} className={'w-8'}/>
                </div>
            </Buttons.Button>
        </div>
        <Lists.Container open={open}>
            {
                Object.keys(data).map((key, index) => {
                    let value = data[key]
                    let template = 'default'
                    if (typeof value === 'object') {
                        template = 'json'
                    }

                    if (typeof value === 'string' && ['true', 'false'].includes(value.toLocaleLowerCase())) {
                        template = 'tinyint'
                        value = value.toLocaleLowerCase() === 'true'
                    }

                    if (typeof value === 'boolean') {
                        template = 'tinyint'
                    }

                    const Template = templates[template]

                    return <Lists.Row key={index}>
                        <Lists.Column type={'dt'}>{key}</Lists.Column>
                        <Lists.Column>
                            <Template value={value} setModal={setModal}/>
                        </Lists.Column>
                    </Lists.Row>
                })
            }
        </Lists.Container>
    </>
}

const List = ({title, fields, data, setModal}) => <Lists.Container>
    <Lists.Header>
        <Texts.Heading type={'h3'}>Record</Texts.Heading>
    </Lists.Header>
    {
        fields.map((field, index) => {
                const Template = templates[field.type] || templates.default
                return <Lists.Row key={index}>
                    <Lists.Column type={'dt'}>{field.label}</Lists.Column>
                    <Lists.Column>
                        <Template value={data[field.name]} setModal={setModal}/>
                    </Lists.Column>
                </Lists.Row>
            },
        )
    }

</Lists.Container>

const ShowModal = ({onClose, children, open}) => <Modals.Modal open={open} type={'full'}>
    <Modals.Container>
        <Modals.Footer>
            <Buttons.Button type={'default'} onClick={onClose}>Close</Buttons.Button>
        </Modals.Footer>
        <Modals.Body>
            {children}
        </Modals.Body>
    </Modals.Container>
</Modals.Modal>

export const Show = ({base_url, database, collection, id, params = {}}) => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [modal, setModal] = useState({
        open: false,
        content: null,
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
            })}>
            {modal.content && modal.content()}
        </ShowModal>}
        <div className={'storybook-collections-show'}>
            <List
                title={data.info.label || ''}
                fields={data.show}
                setModal={setModal}
                data={data.data}/>

                <Texts.Heading type={'h3'} className={'my-8'}>Relations</Texts.Heading>
            {
                data.relations.filter(relation => relation['type'] === 'hasMany').map((relation, index) => {
                    return <Collections.List
                        key={index}
                        relation={relation}
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
