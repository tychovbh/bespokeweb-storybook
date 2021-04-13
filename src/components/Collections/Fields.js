import React from 'react'
import {FormFields} from 'react-form-foundry'
import {Texts} from 'bespokeweb-storybook'

export const Fields = (props) => {
    return <div className={'storybook-collections-form-fields'}>
        <Texts.Heading type={'h1'} appendClassname={'my-10 text-center'}>Create Database</Texts.Heading>
        <hr className={'mb-10'}/>
        <FormFields {...props}/>
        <hr className={'mt-10'}/>
    </div>
}
