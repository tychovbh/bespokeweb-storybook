import React from 'react'
import {Collections} from 'bespokeweb-storybook'
import * as Helpers from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Example/Collections/List',
    component: Collections.List,
    args: {}
}

const Template = (args) => <Collections.List {...args}/>

export const List = Template.bind({})
List.args = {
    base_url: process.env.STORYBOOK_BASE_URL,
    collection: process.env.STORYBOOK_COLLECTION,
    params: {
        additionals: ['index', 'info'],
    },
    buttons: Helpers.CollectionButtons
}
