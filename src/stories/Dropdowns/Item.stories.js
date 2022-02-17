import React from 'react';
import 'bespokeweb-storybook/styles/style.css'
import {Dropdowns} from 'bespokeweb-storybook'

export default {
    title: 'Components/Dropdowns/Item',
    component: Dropdowns.Item,
    argTypes: {},
}

const Template = (args) => <Dropdowns.Dropdown>
    <Dropdowns.Items>
        <Dropdowns.Item {...args}>Item 1</Dropdowns.Item>
        <Dropdowns.Item {...args}>Item 2</Dropdowns.Item>
        <Dropdowns.Item {...args}>Item 3</Dropdowns.Item>
    </Dropdowns.Items>
</Dropdowns.Dropdown>

export const Item = Template.bind({})
Item.args = {}
