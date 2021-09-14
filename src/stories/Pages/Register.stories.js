import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Pages} from 'bespokeweb-storybook'

export default {
    title: 'Example/Pages/Register',
    component: Pages.Register,
    args: {}
}

const Template = (args) => <Pages.Register {...args}/>

const fields = [
    {
        element: {
            name: 'input',
        },
        properties: {
            name: 'firstname',
            type: 'text',
            required: true,
            placeholder: 'Firstname',
        },

    },
    {
        element: {
            name: 'input',
        },
        properties: {
            name: 'prefix',
            type: 'text',
            required: true,
            placeholder: 'Prefix',
        },
    },
    {
        element: {
            name: 'input',
        },
        properties: {
            name: 'lastname',
            type: 'text',
            required: true,
            placeholder: 'Lastname',
        },
    },
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
    },
    {
        element: {
            name: 'input',
        },
        properties: {
            name: 'password-repeat',
            type: 'password',
            required: true,
            placeholder: 'Repeat password',
        },
    },

]

export const Default = Template.bind({})
Default.args = {
    form: {
        name: 'register',
        label: 'Register',
        onSubmit: () => console.log('register'),
        fields
    }
}

export const RegisterError = Template.bind({})
RegisterError.args = {
    errors: [
        'Email is already used'
    ],
    form: {
        name: 'register',
        label: 'Register',
        onSubmit: () => console.log('register'),
        fields
    }
}
