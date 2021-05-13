import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Pages} from 'bespokeweb-storybook'

export default {
    title: 'Example/Pages/Register',
    component: Pages.Register,
    args: {}
}

const Template = (args) => <Pages.Register {...args}/>

export const Default = Template.bind({})
Default.args = {}

export const RegisterError = Template.bind({})
RegisterError.args = {
    errors: [
        'Email is already used'
    ]
}
