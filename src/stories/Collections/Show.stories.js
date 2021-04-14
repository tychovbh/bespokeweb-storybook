import React from 'react'
import {Collections} from 'bespokeweb-storybook'
import * as Helpers from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Example/Collections/Show',
    component: Collections.Show,
    args: {}
}

const Template = (args) => <Collections.Show {...args}/>

export const Show = Template.bind({})
Show.args = {
    base_url: process.env.STORYBOOK_BASE_URL,
    collection: 'managedat/databases',
    database: process.env.STORYBOOK_DATABASE,
    id: 1,
    params: {
        user_id: 1,
        additionals: ['show', 'info', 'relations']
    },
    buttons: Helpers.CollectionButtons
}
