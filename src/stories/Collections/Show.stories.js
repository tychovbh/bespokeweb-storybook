import React from 'react'
import {Collections} from 'bespokeweb-storybook'

export default {
    title: 'Example/Collections/Show',
    component: Collections.Show,
    args: {}
}

const Template = (args) => <Collections.Show {...args}/>

export const Example = Template.bind({})
Example.args = {
    base_url: process.env.STORYBOOK_BASE_URL,
    collection: 'managedat/databases',
    database: process.env.STORYBOOK_DATABASE,
    id: process.env.STORYBOOK_RECORD_ID,
    params: {
        user_id: process.env.STORYBOOK_USER_ID,
        additionals: ['show', 'info', 'relations']
    }
}
