import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Dropdowns} from 'bespokeweb-storybook'

export default {
    title: 'Example/Dropdowns/Link',
    component: Dropdowns.Link,
    args: {}
}

const Template = (args) => <Dropdowns.Link {...args}>link 1</Dropdowns.Link>

export const Link = Template.bind({})
Link.args = {}
