import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Dropdowns} from 'bespokeweb-storybook'

export default {
    title: 'Example/Dropdowns/Link Button',
    component: Dropdowns.LinkButton,
    args: {}
}

const Template = (args) => <Dropdowns.LinkButton {...args}>link 1</Dropdowns.LinkButton>

export const LinkButton = Template.bind({})
LinkButton.args = {}
