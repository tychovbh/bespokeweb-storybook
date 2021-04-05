import React from "react"
import 'bespokeweb-storybook/styles/style.css'
import {Modals, Texts} from 'bespokeweb-storybook'

export default {
    title: 'Example/Modals/Body',
    component: Modals.Body,
    argsTypes: {}
}

const Template = (args) => <Modals.Body {...args}>
    <Texts.Heading type={'h3'} appendClassname={'mb-2'}>Deactivate account</Texts.Heading>
    <Texts.Primary>
        Are you sure you want to deactivate your account? All of your data will be permanently removed. This
        action cannot be undone.
    </Texts.Primary>
</Modals.Body>

export const Default = Template.bind({});
Default.args = {}
