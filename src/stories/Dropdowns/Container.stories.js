import React from 'react'
import '../../styles/style.css'
import {Dropdowns} from '../../'

export default {
    title: 'Example/Dropdowns/Container',
    component: Dropdowns.Container,
    args: {}
}

const Template = (args) => <Dropdowns.Container {...args}>
    <Dropdowns.Link>link 1</Dropdowns.Link>
    <Dropdowns.Link>link 2</Dropdowns.Link>
</Dropdowns.Container>

export const Example = Template.bind({})
Example.args = {
    open: true,
    align: 'left'
}
