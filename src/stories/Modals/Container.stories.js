import React from "react"
import 'bespokeweb-storybook/styles/style.css'
import {Modals, Buttons, Texts} from 'bespokeweb-storybook'

export default {
    title: 'Example/Modals/Breadcrumbs',
    component: Modals.Container,
    argsTypes: {}
}

const Template = (args) => <Modals.Container>
    <Modals.Body>
        <Texts.Heading type={'h3'} appendClassname={'mb-2'}>Deactivate account</Texts.Heading>
        <Texts.Primary>
            Are you sure you want to deactivate your account? All of your data will be permanently removed. This
            action cannot be undone.
        </Texts.Primary>
    </Modals.Body>
    <Modals.Footer>
        <Buttons.Button type={'default'} onClick={args.onClose}>Close</Buttons.Button>
        <Buttons.Button type={'danger'}>Deactivate</Buttons.Button>
    </Modals.Footer>
</Modals.Container>

export const Default = Template.bind({})
Default.args = {}
