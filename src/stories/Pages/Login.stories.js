import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Pages} from 'bespokeweb-storybook'

export default {
    title: 'Example/Pages/Login',
    component: Pages.Login,
    args: {}
}

const Template = (args) => <Pages.Login {...args}/>

export const Default = Template.bind({})
Default.args = {
    onSubmit: () => console.log('Login'),
    form: {
        name: 'login',
        label: 'Login',
        fields: [
            {
                element: {
                    name: 'input',
                },
                properties: {
                    name: 'email',
                    type: 'text',
                    required: true,
                    placeholder: 'Email',
                },
            },
            {
                element: {
                    name: 'input',
                },
                properties: {
                    name: 'password',
                    type: 'password',
                    required: true,
                    placeholder: 'Password',
                },
            }
        ],
    }
}

export const LoginError = Template.bind({})
LoginError.args = {
    errors: [
        'Incorrect password',
    ],
    form: {
        name: 'register',
        label: 'Register',
        fields: [
            {
                element: {
                    name: 'input',
                },
                properties: {
                    name: 'email',
                    type: 'text',
                    required: true,
                    placeholder: 'Email',
                },

            },
            {
                element: {
                    name: 'input',
                },
                properties: {
                    name: 'password',
                    type: 'password',
                    required: true,
                    placeholder: 'Password',
                },
            }
        ],
    }
}
