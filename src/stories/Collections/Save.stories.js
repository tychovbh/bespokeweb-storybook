import React from 'react'
import {Collections} from '../../'

export default {
    title: 'Example/Collections/Save',
    component: Collections.Save,
    args: {}
}

const Template = (args) => <Collections.Save {...args}/>

export const Create = Template.bind({})
Create.args = {
    base_url: 'http://local.wielerflits.nl',
    collection: 'persons'
}

export const Edit = Template.bind({})
Edit.args = {
    id: 1,
    base_url: 'http://local.wielerflits.nl',
    collection: 'persons'
}
