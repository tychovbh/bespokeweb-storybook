import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Pages} from 'bespokeweb-storybook'

export default {
    title: 'Example/Pages/Description',
    component: Pages.Description,
    argsTypes: {}
}

const Template = (args) => <Pages.Description {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
}
