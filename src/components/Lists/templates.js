import React from 'react'
import {Lists} from 'bespokeweb-storybook'
import ReactJson from 'react-json-view'

export const templates = {
    default: ({value}) => <>{value ?? ''}</>,
    json: ({value, setModal}) => <Lists.ColumnJson value={value} setModal={setModal}/>,
    jsonb: ({value, setModal}) => <Lists.ColumnJson value={value} setModal={setModal}/>,
    json_raw: ({value}) => <ReactJson src={value}/>,
    tinyint: ({value}) => <Lists.ColumnBool value={value}/>,
    image: ({value, name}) => <img src={value} alt={name}/>,
    wysiwyg: ({value}) => <div className={'ck'} dangerouslySetInnerHTML={{__html: value}}/>
}
