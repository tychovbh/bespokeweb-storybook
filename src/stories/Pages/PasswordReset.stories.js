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
PasswordReset.args = {
    form: {
        name: 'register',
        label: 'Register',
        fields: [
            {
                element: {
                    name: 'input',
                },
                properties: {
                    name: 'password',
                    type: 'text',
                    required: true,
                    placeholder: 'Password',
                },
            },
            {
                element: {
                    name: 'input',
                },
                properties: {
                    name: 'password-repeat',
                    type: 'text',
                    required: true,
                    placeholder: 'Repeat password',
                },
            }
        ],
    }
}
