import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Lists} from 'bespokeweb-storybook'

export default {
    title: 'Components/Lists/Stacked',
    component: Lists.Stacked.Container,
    argTypes: {},
}

const Template = (args) => <Lists.Stacked.Container {...args}>
    <Lists.Stacked.Item>
        Item 1
    </Lists.Stacked.Item>

    <Lists.Stacked.Item>
        Item 2
    </Lists.Stacked.Item>

    <Lists.Stacked.Item>
        Item 3
    </Lists.Stacked.Item>
</Lists.Stacked.Container>

export const Default = Template.bind({})
Default.args = {}
