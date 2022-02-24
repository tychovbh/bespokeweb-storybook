import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'
import {days} from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Components/Calendars/Calendar',
    component: Calendars.Calendar,
    argTypes: {},
}

const Template = (args) => <Calendars.Calendar onClick={date => console.log(date)}>
    {days.map((day) => {
        return <Calendars.Cells.Cell
            isCurrentMonth={day.isCurrentMonth}
            isToday={day.isToday}
            isSelected={day.isSelected}
        >
            <Calendars.Cells.Date dateTime={day.date} isSelected={day.isSelected} isToday={day.isToday}>
                {day.date.split('-').pop().replace(/^0/, '')}
            </Calendars.Cells.Date>

            <Calendars.Events.List>
                {
                    day.events.map((event) => {
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
                    day.events.length > 5 &&
                    <li className={'text-gray-500 text-left hidden lg:block'}>
                        + {day.events.length - 5} more
                    </li>
                }
            </Calendars.Events.List>
        </Calendars.Cells.Cell>
    })}
</Calendars.Calendar>

export const Month = Template.bind({})
Month.args = {}
