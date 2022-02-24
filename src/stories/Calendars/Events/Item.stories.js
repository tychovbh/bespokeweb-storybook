import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'
import {days} from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Components/Calendars/Events',
    component: Calendars.Events.Item,
    argTypes: {},
}

const Template = (args) => <Calendars.Events.Item {...args}>
    <Calendars.Events.Label>
        {days[7].events[0].name}
    </Calendars.Events.Label>

    <Calendars.Events.Time>
        {days[7].events[0].time}
    </Calendars.Events.Time>
</Calendars.Events.Item>


export const Item = Template.bind({})
Item.args = {}
