import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Pages} from 'bespokeweb-storybook'

export default {
    title: 'Example/Pages/Forgotten Password',
    component: Pages.ForgottenPassword,
    args: {}
}

const Template = (args) => <Pages.ForgottenPassword {...args}/>

export const ForgottenPassword = Template.bind({})
ForgottenPassword.args = {
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

            }
        ],
    }
}
