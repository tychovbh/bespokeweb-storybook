import React from 'react'
import '../../styles/style.css'
import {Pages} from '../../'

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