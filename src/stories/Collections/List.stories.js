import React from 'react'
import {Collections} from '../../'

export default {
    title: 'Example/Collections/List',
    component: Collections.List,
    args: {}
}

const Template = (args) => <Collections.List {...args}/>

export const Example = Template.bind({})
Example.args = {
    endpoint: 'http://local.wielerflits.nl/api/persons'
}
