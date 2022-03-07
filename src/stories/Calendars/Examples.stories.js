import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Buttons, Calendars, Dropdowns, Icons, Lists} from 'bespokeweb-storybook'
import {days, selectedDay} from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Components/Calendars/Examples',
    component: Calendars.Container,
    argTypes: {},
}

export const Month = (args) => <Calendars.Container {...args}>
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
        <Calendars.Heads.Container>
            <Calendars.Heads.Item>
                M<span>on</span>
            </Calendars.Heads.Item>

            <Calendars.Heads.Item>
                T<span>ue</span>
            </Calendars.Heads.Item>

            <Calendars.Heads.Item>
                W<span>ed</span>
            </Calendars.Heads.Item>

            <Calendars.Heads.Item>
                T<span>hu</span>
            </Calendars.Heads.Item>

            <Calendars.Heads.Item>
                F<span>ri</span>
            </Calendars.Heads.Item>

            <Calendars.Heads.Item>
                S<span>at</span>
            </Calendars.Heads.Item>

            <Calendars.Heads.Item>
                S<span>un</span>
            </Calendars.Heads.Item>
        </Calendars.Heads.Container>

        <Calendars.Calendar onClick={date => console.log(date)}>
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
    </Calendars.Body>

    <div className="py-10 px-4 sm:px-6">
        <Lists.Stacked.Container
            appendClassName={'text-sm rounded-lg shadow ring-1 ring-black ring-opacity-5 overflow-hidden'}>
            {selectedDay.events.map((event) => (
                <Lists.Stacked.Item key={event.id}>
                    <div className={'group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50'}>
                        <div className="flex-auto">
                            <p className="font-semibold text-gray-900">{event.name}</p>

                            <time dateTime={event.datetime} className="mt-2 flex items-center text-gray-700">
                                <Icons.Icon name={'Clock'} className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                {event.time}
                            </time>
                        </div>
                        <Buttons.Button appendClassName={'rounded-md border border-gray-300 bg-white py-2 px-3'}>
                            Edit<span className="sr-only">, {event.name}</span>
                        </Buttons.Button>
                        <a
                            href={event.href}
                            className="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                        >
                            Edit<span className="sr-only">, {event.name}</span>
                        </a>
                    </div>
                </Lists.Stacked.Item>
            ))}
        </Lists.Stacked.Container>
    </div>

    {
        selectedDay && selectedDay.events.length > 0 &&
        <div className="py-10 px-4 sm:px-6">
            <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
                {selectedDay.events.map((event) => (
                    <li key={event.id} className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
                        <div className="flex-auto">
                            <p className="font-semibold text-gray-900">{event.name}</p>
                            <time dateTime={event.datetime} className="mt-2 flex items-center text-gray-700">
                                <Icons.Icon name={'Clock'} className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                {event.time}
                            </time>
                        </div>
                        <a
                            href={event.href}
                            className="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                        >
                            Edit<span className="sr-only">, {event.name}</span>
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    }
</Calendars.Container>
Month.args = {}
