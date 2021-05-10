import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Pages} from 'bespokeweb-storybook'

export default {
    title: 'Example/Pages/Password Reset',
    component: Pages.PasswordReset,
    args: {}
}

const Template = (args) => <Pages.PasswordReset {...args}/>

export const PasswordReset = Template.bind({})
PasswordReset.args = {}
