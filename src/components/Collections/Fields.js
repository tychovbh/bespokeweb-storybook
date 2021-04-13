import React from 'react'
import {FormFields} from 'react-form-foundry'
import {Collections} from 'bespokeweb-storybook'

export const Fields = (props) => {
    return <div className={'storybook-collections-form-fields'}>
        <Collections.Title>Create Record</Collections.Title>
        <FormFields {...props}/>
        <hr className={'mt-10'}/>
    </div>
}
