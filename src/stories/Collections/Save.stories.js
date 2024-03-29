import React from 'react'
import {Collections} from 'bespokeweb-storybook'
import * as Helpers from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Example/Collections/Save',
    component: Collections.Save,
    args: {}
}

const Template = (args) => <Collections.Save {...args}/>

export const Create = Template.bind({})
Create.args = {
    base_url: process.env.STORYBOOK_BASE_URL,
    collection: 'eyecons-backend/channels',
    params: {
        user_id: process.env.STORYBOOK_USER_ID,
    },
    buttons: Helpers.CollectionButtons
}

export const Edit = Template.bind({})
Edit.args = {
    id: process.env.STORYBOOK_RECORD_ID,
    base_url: process.env.STORYBOOK_BASE_URL,
    collection: process.env.STORYBOOK_COLLECTION,
    params: {
        user_id: process.env.STORYBOOK_USER_ID,
    }
}
