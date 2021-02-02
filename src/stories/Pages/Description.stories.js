import React from 'react'
import '../../styles/style.css'
import {Pages} from '../../'

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