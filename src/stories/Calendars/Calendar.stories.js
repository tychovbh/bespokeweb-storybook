import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Buttons, Calendars, Dropdowns, Icons} from 'bespokeweb-storybook'

export default {
    title: 'Components/Calendars/Calendar',
    component: Calendars.Calendar,
    argTypes: {},
}

const days = [
    {date: '2021-12-27', events: []},
    {date: '2021-12-28', events: []},
    {date: '2021-12-29', events: []},
    {date: '2021-12-30', events: []},
    {date: '2021-12-31', events: []},
    {date: '2022-01-01', isCurrentMonth: true, events: []},
    {date: '2022-01-02', isCurrentMonth: true, events: []},
    {

        date: '2022-01-03',
        isCurrentMonth: true,
        events: [
            {id: 1, name: 'Design review', time: '10AM', datetime: '2022-01-03T10:00', href: '#'},
            {id: 2, name: 'Sales meeting', time: '2PM', datetime: '2022-01-03T14:00', href: '#'},
        ],
    },
    {date: '2022-01-04', isCurrentMonth: true, events: []},
    {date: '2022-01-05', isCurrentMonth: true, events: []},
    {date: '2022-01-06', isCurrentMonth: true, events: []},
    {
        date: '2022-01-07',
        isCurrentMonth: true,
        events: [{id: 3, name: 'Date night', time: '6PM', datetime: '2022-01-08T18:00', href: '#'}],
    },
    {date: '2022-01-08', isCurrentMonth: true, events: []},
    {date: '2022-01-09', isCurrentMonth: true, events: []},
    {date: '2022-01-10', isCurrentMonth: true, events: []},
    {date: '2022-01-11', isCurrentMonth: true, events: []},
    {
        date: '2022-01-12',
        isCurrentMonth: true,
        isToday: true,
        events: [{id: 6, name: "Sam's birthday party", time: '2PM', datetime: '2022-01-25T14:00', href: '#'}],
    },
    {date: '2022-01-13', isCurrentMonth: true, events: []},
    {date: '2022-01-14', isCurrentMonth: true, events: []},
    {date: '2022-01-15', isCurrentMonth: true, events: []},
    {date: '2022-01-16', isCurrentMonth: true, events: []},
    {date: '2022-01-17', isCurrentMonth: true, events: []},
    {date: '2022-01-18', isCurrentMonth: true, events: []},
    {date: '2022-01-19', isCurrentMonth: true, events: []},
    {date: '2022-01-20', isCurrentMonth: true, events: []},
    {date: '2022-01-21', isCurrentMonth: true, events: []},
    {
        date: '2022-01-22',
        isCurrentMonth: true,
        isSelected: true,
        events: [
            {id: 4, name: 'Maple syrup museum', time: '3PM', datetime: '2022-01-22T15:00', href: '#'},
            {id: 5, name: 'Hockey game', time: '7PM', datetime: '2022-01-22T19:00', href: '#'},
        ],
    },
    {date: '2022-01-23', isCurrentMonth: true, events: []},
    {date: '2022-01-24', isCurrentMonth: true, events: []},
    {date: '2022-01-25', isCurrentMonth: true, events: []},
    {date: '2022-01-26', isCurrentMonth: true, events: []},
    {date: '2022-01-27', isCurrentMonth: true, events: []},
    {date: '2022-01-28', isCurrentMonth: true, events: []},
    {date: '2022-01-29', isCurrentMonth: true, events: []},
    {date: '2022-01-30', isCurrentMonth: true, events: []},
    {date: '2022-01-31', isCurrentMonth: true, events: []},
    {date: '2022-02-01', events: []},
    {date: '2022-02-02', events: []},
    {
        date: '2022-02-03',
        events: [{id: 7, name: 'Cinema with friends', time: '9PM', datetime: '2022-02-04T21:00', href: '#'}],
    },
    {date: '2022-02-04', events: []},
    {date: '2022-02-05', events: []},
    {date: '2022-02-06', events: []},
]

function Cell({day}) {
    return <Calendars.Cells.Cell key={day.date} active={day.isCurrentMonth}>
        <Calendars.Cells.Date active={day.isToday}>
            {day.date.split('-').pop().replace(/^0/, '')}
        </Calendars.Cells.Date>

        <Calendars.Events.List>
            {
                day.events.map((event) => {
                    return <Calendars.Events.Item key={event.id}>
                        <Calendars.Events.Label>
                            {event.name}
                        </Calendars.Events.Label>

                        <Calendars.Events.Time>
                            {event.time}
                        </Calendars.Events.Time>
                    </Calendars.Events.Item>
                })
            }
        </Calendars.Events.List>
    </Calendars.Cells.Cell>
}

const Template = (args) => <Calendars.Container {...args}>
    <Calendars.Header>
        <Calendars.Title dateTime={'2022-01'}>January 2022</Calendars.Title>

        <div className={'flex items-center'}>
            <Calendars.DateSelect/>

            <div className={'hidden md:ml-4 md:flex md:items-center'}>
                <Dropdowns.Dropdown>
                    <Dropdowns.Button>
                        Month view <Icons.Icon name={'ChevronDown'} type={'solid'}
                                               className={'w-5 ml-2 text-gray-400'}/>
                    </Dropdowns.Button>

                    <Dropdowns.Items align={'right'}>
                        <Dropdowns.Item>Day view</Dropdowns.Item>
                        <Dropdowns.Item>Week view</Dropdowns.Item>
                        <Dropdowns.Item>Month view</Dropdowns.Item>
                        <Dropdowns.Item>year view</Dropdowns.Item>
                    </Dropdowns.Items>
                </Dropdowns.Dropdown>

                <div className={'mx-6 h-6 w-px bg-gray-300'}/>

                <Buttons.Button appendClassname={'storybook-calendars-add-event-button'}>
                    Add event
                </Buttons.Button>
            </div>
        </div>
    </Calendars.Header>

    <Calendars.Body>
        <Calendars.Head>
            <Calendars.HeadItem>
                M<span>on</span>
            </Calendars.HeadItem>

            <Calendars.HeadItem>
                T<span>ue</span>
            </Calendars.HeadItem>

            <Calendars.HeadItem>
                W<span>ed</span>
            </Calendars.HeadItem>

            <Calendars.HeadItem>
                T<span>hu</span>
            </Calendars.HeadItem>

            <Calendars.HeadItem>
                F<span>ri</span>
            </Calendars.HeadItem>

            <Calendars.HeadItem>
                S<span>at</span>
            </Calendars.HeadItem>

            <Calendars.HeadItem>
                S<span>un</span>
            </Calendars.HeadItem>
        </Calendars.Head>

        <Calendars.Calendar.Container>
            <Calendars.Calendar.Desktop>
                {
                    days.map((day) => {
                        return <Cell day={day}/>
                    })
                }
            </Calendars.Calendar.Desktop>

            <Calendars.Calendar.Mobile>
                {
                    days.map((day) => {
                        return <Cell day={day}/>
                    })
                }
            </Calendars.Calendar.Mobile>
        </Calendars.Calendar.Container>
    </Calendars.Body>
</Calendars.Container>

export const Calendar = Template.bind({})
Calendar.args = {}
