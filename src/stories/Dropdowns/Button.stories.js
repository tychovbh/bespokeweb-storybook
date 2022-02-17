import React from 'react';
import 'bespokeweb-storybook/styles/style.css'
import {Dropdowns, Icons} from 'bespokeweb-storybook'

export default {
    title: 'Components/Dropdowns/Button',
    component: Dropdowns.Button,
    argTypes: {},
}

const Template = (args) => <Dropdowns.Dropdown>
    <Dropdowns.Button {...args}>
        Dropdown <Icons.Icon name={'ChevronDown'} className={'w-5 ml-2 text-gray-400'}/>
    </Dropdowns.Button>
</Dropdowns.Dropdown>

export const Button = Template.bind({})
Button.args = {}
