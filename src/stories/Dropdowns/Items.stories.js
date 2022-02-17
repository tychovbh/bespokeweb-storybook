import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Dropdowns} from 'bespokeweb-storybook'
import {ChevronDownIcon} from "@heroicons/react/solid";

export default {
    title: 'Components/Dropdowns/Items',
    component: Dropdowns.Items,
    argTypes: {},
}

const Template = (args) =>
    <Dropdowns.Dropdown>
        {/*<Dropdowns.Items {...args}>*/}
        <Dropdowns.Item>
            Month view <ChevronDownIcon className={'ml-2 h-5 w-5 text-gray-400'} aria-hidden={'true'}/>
        </Dropdowns.Item>
        {/*</Dropdowns.Items>*/}
    </Dropdowns.Dropdown>

export const Items = Template.bind({})
Items.args = {}
