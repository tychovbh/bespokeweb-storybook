import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Loaders, Lists, Collections, Texts, Buttons, Modals} from 'bespokeweb-storybook'

function map(html, data) {

    if (Array.isArray(data)) {
        data.map((item, key) => {
            html += map(html, item)
        })
    } else {
        for (let key in data) {
            html += `<p>${key}: ${data[key]}</p>`
        }
    }

    return html
}

const Something = ({data}) => {
    return <>
        {data.map}
    </>
}

const templates = {
    default: ({field, data}) => <>{data[field.name] ?? ''}</>,
    json: ({field, data, setModal}) => <div>
        <Buttons.Button type={'dark'} onClick={() => {
            setModal({open: true, content: () => <div>
                    {

                    }
                </div>, params: {field}})
        }}>open</Buttons.Button>
    </div>
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
            <Lists.Container>
                <Lists.Header>
                    <Texts.Heading type={'h3'}>{data.info.label || ''}</Texts.Heading>
                </Lists.Header>
                {
                    data.show.map((field, index) => {
                            const Template = templates[field.type] || templates.default
                            return <Lists.Row key={index}>
                                <Lists.Column type={'dt'}>{field.label}</Lists.Column>
                                <Lists.Column>
                                    <Template field={field} data={data.data} setModal={setModal}/>
                                </Lists.Column>
                            </Lists.Row>
                        },
                    )
                }

            </Lists.Container>

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
