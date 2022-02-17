import React from 'react';
import 'bespokeweb-storybook/styles/style.css'
import {Buttons, Calendars, Dropdowns, Icons} from 'bespokeweb-storybook'

export default {
    title: 'Components/Calendars/Header',
    component: Calendars.Header,
    argTypes: {},
}

const Template = (args) => <Calendars.Header {...args}>
    <Calendars.Title dateTime={'2022-01'}>January 2022</Calendars.Title>

    <div className="flex items-center">
        <Calendars.DateSelect/>

        <div className={'hidden md:ml-4 md:flex md:items-center'}>
            <Dropdowns.Dropdown>
                <Dropdowns.Button>
                    Month view <Icons.Icon name={'ChevronDown'} className={'w-5 ml-2 text-gray-400'}/>
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
                Add Event
            </Buttons.Button>
        </div>
    </div>
</Calendars.Header>

export const Header = Template.bind({})
Header.args = {}
