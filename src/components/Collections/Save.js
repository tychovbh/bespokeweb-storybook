import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Loaders, Collections} from 'bespokeweb-storybook'
import PropTypes from 'prop-types'

export const Save = ({base_url, collection, id, params = {}, buttons}) => {
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
            collection={collection}
            params={params}
            buttons={buttons}/>
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
    buttons: PropTypes.func
}
