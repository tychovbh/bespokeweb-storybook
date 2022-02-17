import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Dropdowns, Icons} from 'bespokeweb-storybook'

export default {
    title: 'Components/Dropdowns/Dropdown',
    components: Dropdowns.Dropdown,
    args: {}
}

const Template = ({children, ...args}) => {
    return <Dropdowns.Dropdown {...args}>
        <Dropdowns.Button>
            Dropdown <Icons.Icon name={'ChevronDown'} className={'w-5 ml-2 text-gray-400'}/>
        </Dropdowns.Button>

        {
            children ??
            <Dropdowns.Items>
                <Dropdowns.Item>Item 1</Dropdowns.Item>
                <Dropdowns.Item>Item 2</Dropdowns.Item>
                <Dropdowns.Item>Item 3</Dropdowns.Item>
            </Dropdowns.Items>
        }
    </Dropdowns.Dropdown>
}

export const Default = Template.bind({})
Default.args = {}

export const Left = Template.bind({})
Left.args = {
    children: <Dropdowns.Items align={'left'}>
        <Dropdowns.Item>Item 1</Dropdowns.Item>
        <Dropdowns.Item>Item 2</Dropdowns.Item>
        <Dropdowns.Item>Item 3</Dropdowns.Item>
    </Dropdowns.Items>
}

export const Right = Template.bind({})
Right.args = {
    children: <Dropdowns.Items align={'right'}>
        <Dropdowns.Item>Item 1</Dropdowns.Item>
        <Dropdowns.Item>Item 2</Dropdowns.Item>
        <Dropdowns.Item>Item 3</Dropdowns.Item>
    </Dropdowns.Items>
}
