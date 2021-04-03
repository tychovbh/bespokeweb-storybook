import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Form from 'react-form-foundry'
import {Buttons, Texts, Forms, Loaders} from '../../'

export const Save = ({base_url, collection, id, return_url}) => {
    const [form, setForm] = useState({})
    const [isLoading, setLoading] = useState(true)
    const endpoint = `${base_url}/${collection}/${id ? `${id}/edit` : 'create'}`

    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                setForm(response.data)
                setLoading(false)
            })
    }, [])

    const handleSubmit = (event, model) => {
        event.preventDefault()
        axios.post(endpoint, model)
            .then(response => {
                if (response.data) {
                    window.location.href = return_url || `/${collection}`
                }
            })
            .catch(e => {
                console.log(e)
            })
    }

    if (isLoading) {
        return <div className={'h-64 flex justify-center items-center'}>
            <Loaders.Circle/>
        </div>
    }

    if (!form.title) {
        return <></>
    }

    return <div>
        <div className={'collections-buttons'}>
            {/*<Link to={`/dashboard/${collection}`}>*/}
            <Buttons.Button type={'success'}>Terug</Buttons.Button>
            {/*</Link>*/}
        </div>

        <div className={'storybook-collections-save-form'}>
            <Form
                defaults={form.defaults}
                method={'post'}
                action={form.route}
                onSubmit={handleSubmit}
                components={{
                    title: Texts.Heading,
                    field: Forms.Field,
                    input: ({name, value, onChange, type}) => <Forms.Input
                        onChange={onChange}
                        name={name}
                        type={type}
                        value={value}/>,
                    select: ({name, value, onChange, children, label}) => <Forms.Select
                        onChange={onChange}
                        name={name}
                        children={[<option key={'empty'}>Pick a {label}</option>].concat(children)}
                        value={value}/>,
                    label: Forms.Label,
                    submit: () => <Forms.Submit type={'primary'} title={'Opslaan'}/>,
                }}
                form={form}
            />
        </div>
    </div>
}

export default Save
