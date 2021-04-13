import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Loaders, Collections} from 'bespokeweb-storybook'

export const Save = ({base_url, collection, id, return_url, params = {}, buttons}) => {
    const [form, setForm] = useState({})
    const [isLoading, setLoading] = useState(true)
    const endpoint = `${base_url}/${collection}/${id ? `${id}/edit` : 'create'}`

    useEffect(() => {
        axios.get(endpoint, {params})
            .then(response => {
                setForm(response.data.data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <div className={'h-64 flex justify-center items-center'}>
            <Loaders.Circle/>
        </div>
    }

    if (!form.title) {
        return <>
            <p>Oops something went wrong</p>
        </>
    }

    return <>
        <Collections.Form
            id={id}
            form={form}
            return_url={return_url}
            collection={collection}
            params={params}
            buttons={buttons}/>
    </>
}

export default Save
