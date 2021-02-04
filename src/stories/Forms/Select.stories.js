import React from 'react'
import '../../styles/style.css'
import {Forms} from '../../'

export default {
    title: 'Example/Forms/Select',
    components: Forms.Select,
    argsTypes: {}
}

const Template = (args) => <Forms.Select {...args} />

export const Default = Template.bind({})
Default.args = {
    name: 'TestSelect',
    placeholder: 'Choose',
    value: '3',
    options: [
        {
            value: '1',
            label: 'Eén'
        },
        {
            value: '2',
            label: 'Twee'
        },
        {
            value: '3',
            label: 'Drie'
        },

    ]
}