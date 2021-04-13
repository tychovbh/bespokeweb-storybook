import React from 'react'
import {Collections} from 'bespokeweb-storybook'

export default {
    title: 'Example/Collections/List',
    component: Collections.List,
    args: {}
}

const Template = (args) => <Collections.List {...args}/>

export const Example = Template.bind({})
Example.args = {
    base_url: process.env.STORYBOOK_BASE_URL,
    collection: process.env.STORYBOOK_COLLECTION,
    params: {
        user_id: process.env.STORYBOOK_USER_ID,
        additionals: ['index', 'info'],
    }
}
