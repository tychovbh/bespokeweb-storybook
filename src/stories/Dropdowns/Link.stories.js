import React from 'react'
import '../../styles/style.css'
import {Dropdowns} from '../../'

export default {
    title: 'Example/Dropdowns/Link',
    component: Dropdowns.Link,
    args: {}
}

const Template = (args) => <Dropdowns.Link {...args}>link 1</Dropdowns.Link>

export const Example = Template.bind({})
Example.args = {}
