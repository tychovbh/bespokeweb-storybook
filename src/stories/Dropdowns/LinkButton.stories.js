import React from 'react'
import '../../styles/style.css'
import {Dropdowns} from '../../'

export default {
    title: 'Example/Dropdowns/LinkButton',
    component: Dropdowns.LinkButton,
    args: {}
}

const Template = (args) => <Dropdowns.LinkButton {...args}>link 1</Dropdowns.LinkButton>

export const Example = Template.bind({})
Example.args = {}
