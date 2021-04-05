import React from 'react'
import {Collections} from 'bespokeweb-storybook'

export default {
    title: 'Example/Collections/Save',
    component: Collections.Save,
    args: {}
}

const Template = (args) => <Collections.Save {...args}/>

export const Create = Template.bind({})
Create.args = {
    base_url: process.env.STORYBOOK_BASE_URL,
    collection: process.env.STORYBOOK_COLLECTION,
    params: {
        user_id: 2,
    }
}

export const Edit = Template.bind({})
Edit.args = {
    id: 1,
    base_url: process.env.STORYBOOK_BASE_URL,
    collection: process.env.STORYBOOK_COLLECTION,
    params: {
        user_id: 2,
    }
}
