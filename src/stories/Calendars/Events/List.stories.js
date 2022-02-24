import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'
import {days} from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Components/Calendars/Events',
    component: Calendars.Events.List,
    argTypes: {},
}

const Template = (args) => <Calendars.Events.List {...args}>
    {
        days[7].events.map((event) => {
            return <Calendars.Events.Item>
                <Calendars.Events.Label>
                    {event.name}
                </Calendars.Events.Label>

                <Calendars.Events.Time>
                    {event.time}
                </Calendars.Events.Time>
            </Calendars.Events.Item>
        })
    }

    {
        days[7].events.length > 5 &&
        <li className={'text-gray-500 text-left hidden lg:block'}>
            + {days[7].events.length - 5} more
        </li>
    }
</Calendars.Events.List>

export const List = Template.bind({})
List.args = {}
