import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Loaders, Lists, Collections, Buttons, Modals, Layouts} from 'bespokeweb-storybook'
import PropTypes from 'prop-types'
import {Save} from './Save'

const List = ({fields, data, setModal}) => <Lists.Container>
    {
        fields.map((field, index) => {
                const Template = Lists.templates[field.type] || Lists.templates.default
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
