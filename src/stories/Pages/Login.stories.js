import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Pages} from 'bespokeweb-storybook'

export default {
    title: 'Example/Pages/Login',
    component: Pages.Login,
    args: {}
}

const Template = (args) => <Pages.Login {...args}/>

export const Login = Template.bind({})
Login.args = {}
