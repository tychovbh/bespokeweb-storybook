import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'
import {days} from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Components/Calendars/Cells',
    component: Calendars.Cells.Cell,
    argTypes: {},
}

const Template = ({args}) => <Calendars.Calendar>
    <Calendars.Cells.Cell {...args}>
        <Calendars.Cells.Date dateTime={days[7].date} isSelected={days[7].isSelected} isToday={days[7].isToday}>
            {days[7].date.split('-').pop().replace(/^0/, '')}
        </Calendars.Cells.Date>

        <Calendars.Events.List>
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
    </Calendars.Cells.Cell>
</Calendars.Calendar>

export const Cell = Template.bind({})
Cell.args = {
    isCurrentMonth: days[7].isCurrentMonth,
    isToday: days[7].isToday,
    isSelected: days[7].isSelected
}
