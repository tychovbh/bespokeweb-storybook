import React from 'react'
import '../../styles/style.css'
import {Forms} from '../../'

export default {
    title: 'Example/Forms/Select',
    component: Forms.Select,
    argsTypes: {}
}

const Template = (args) => <Forms.Select {...args}>
    <option value="1">Eén</option>
    <option value="2">Twee</option>
    <option value="3">Drie</option>
</Forms.Select>

export const Default = Template.bind({})
Default.args = {
    name: 'TestSelect',
    value: '3'
}