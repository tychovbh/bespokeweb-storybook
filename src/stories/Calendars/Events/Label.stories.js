import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'
import {days} from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Components/Calendars/Events',
    component: Calendars.Events.Label,
    argTypes: {},
}

const Template = (args) => <Calendars.Events.Label {...args}>
    {days[7].events[0].name}
</Calendars.Events.Label>

export const Label = Template.bind({})
Label.args = {}
