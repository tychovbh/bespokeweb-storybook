import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Loaders, Lists, Collections, Texts, Buttons, Modals, Icons, Forms, Layouts} from 'bespokeweb-storybook'
import PropTypes from 'prop-types'
import {Save} from './Save'

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
    tinyint: ({value}) => <Forms.Toggle value={Boolean(value)} disabled/>,
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

const List = ({fields, data, setModal}) => <Lists.Container>
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

export const Show = ({base_url, database, collection, id, params = {}, buttons}) => {
    const [model, setModel] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [modal, setModal] = useState({
        open: false,
        content: null,
    })

    useEffect(() => {
        setLoading(true)
        Axios.get(`${base_url}/${collection}/${id}`, {params})
            .then(response => {
                setModel(response.data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <div className={'h-64 flex justify-center items-center'}>
            <Loaders.Circle/>
        </div>
    }

    return <>
        <Collections.Buttons buttons={buttons}>
            <Buttons.ButtonLink href={`/${collection}`} appendClassname={'mr-4'}>Back</Buttons.ButtonLink>
            <Buttons.ButtonLink href={`/${collection}/${id}/edit`} appendClassname={'mr-4'} type={'success'}>
                Edit
            </Buttons.ButtonLink>
        </Collections.Buttons>

        {
            modal.open && <ShowModal
                {...modal.params}
                open={modal.open}
                onClose={() => setModal({
                    open: false,
                    content: null,
                })}>
                {modal.content && modal.content()}
            </ShowModal>
        }

        <Layouts.Container>
            <Collections.Title>Record</Collections.Title>
            <List
                fields={model.show}
                setModal={setModal}
                data={model.data}/>

            <hr className={'my-10'}/>
        </Layouts.Container>

        {
            !!model.relations.length && <Collections.Relations
                relations={model.relations}
                base_url={base_url}
                database={database}
                params={params}
                model={model}
            />
        }
    </>
}

Save.propTypes = {
    /**
     * The base url
     */
    base_url: PropTypes.string,

    /**
     * The collection name
     */
    collection: PropTypes.string,

    /**
     * The database name
     */
    database: PropTypes.string,

    /**
     * The Collection ID
     */
    id: PropTypes.number,

    /**
     * Te request params added to all requests
     */
    params: PropTypes.object,

    /**
     * The custom buttons added to the topbar
     */
    buttons: PropTypes.func,
}
