import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Pages} from 'bespokeweb-storybook'

export default {
    title: 'Example/Pages/Register',
    component: Pages.Register,
    args: {}
}

const Template = (args) => <Pages.Register {...args}/>

export const Register = Template.bind({})
Register.args = {}
