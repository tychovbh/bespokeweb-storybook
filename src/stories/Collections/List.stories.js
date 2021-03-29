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
    base_url: 'http://local.wielerflits.nl',
    collection: 'persons'
}
