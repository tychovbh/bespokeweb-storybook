import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'

export default {
    title: 'Components/Calendars/Heads',
    component: Calendars.Heads.Item,
    argTypes: {},
}

const Template = (args) => <Calendars.Heads.Item {...args}>
    M<span>on</span>
</Calendars.Heads.Item>

export const Item = Template.bind({})
Item.args = {}
