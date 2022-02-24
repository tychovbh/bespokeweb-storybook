import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'
import {days} from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Components/Calendars/Events',
    component: Calendars.Events.Time,
    argTypes: {},
}

const Template = (args) => <Calendars.Events.Time {...args}>
    {days[7].event[0].time}
</Calendars.Events.Time>

export const Time = Template.bind({})
Time.args = {}
