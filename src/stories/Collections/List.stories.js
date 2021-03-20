import React from 'react'
import {Collections} from '../../'

export default {
    title: 'Example/Collections/List',
    component: Collections.List,
    args: {}
}

const Template = (args) => <Collections.List {...args}/>

export const List = Template.bind({})
List.args = {
    url: 'http://local.wielerflits.nl/api/persons'
}
