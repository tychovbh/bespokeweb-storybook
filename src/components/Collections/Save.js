import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Buttons, Texts, Forms, Loaders} from '../../'
import Form from 'react-form-foundry'

export const Create = ({endpoint}) => {
    const [form, setForm] = useState({})
    const [isLoading, setLoading] = useState(true)
    const search = location.search || ''

    useEffect(() => {
        axios.get(endpoint + '/create' + search)
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
                    window.location = return_url || `/dashboard/${collection}`
                }
            })
            .catch(e => {
                console.log(e)
            })
    }

    if (isLoading) {
        return <div className={'h-64 flex justify-center items-center'}>
            <Loaders.Circle />
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

        <div className={'form'}>
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

export default Create