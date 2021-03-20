import React from 'react'
import {Collections} from '../../'

export default {
    title: 'Example/Collections/List',
    component: Collections.Show,
    args: {}
}

const Template = (args) => <Collections.Show {...args}/>

export const Show = Template.bind({})
Show.args = {
    url: 'http://local.wielerflits.nl/api/persons/1'
}
