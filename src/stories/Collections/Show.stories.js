import React from 'react'
import {Collections} from '../../'

export default {
    title: 'Example/Collections/Show',
    component: Collections.Show,
    args: {}
}

const Template = (args) => <Collections.Show {...args}/>

export const Example = Template.bind({})
Example.args = {
    url: 'http://local.wielerflits.nl/api/persons/1'
}
