import React from 'react'
import {Forms} from 'bespokeweb-storybook'

export function ColumnBool({value}) {
    return <Forms.Toggle value={Boolean(value)} disabled/>
}
