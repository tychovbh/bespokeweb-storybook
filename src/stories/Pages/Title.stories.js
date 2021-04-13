import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Pages} from 'bespokeweb-storybook'

export default {
    title: 'Example/Pages/Title',
    component: Pages.Title,
    argsTypes: {}
}

const Template = (args) => <Pages.Title {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Title'
}
