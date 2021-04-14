import React from 'react'
import '../../styles/style.css'
import {Dropdowns} from '../../'

export default {
    title: 'Example/Dropdowns/Link Button',
    component: Dropdowns.LinkButton,
    args: {}
}

const Template = (args) => <Dropdowns.LinkButton {...args}>link 1</Dropdowns.LinkButton>

export const LinkButton = Template.bind({})
LinkButton.args = {}
