import React from 'react';
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'

export default {
    title: 'Components/Calendars/Header',
    component: Calendars.Header,
    argTypes: {},
}

const Template = (args) => <Calendars.Header {...args}/>

export const Header = Template.bind({})
Header.args = {
    children: <>
        <Calendars.Title dateTime={'2022-01'}>January 2022</Calendars.Title>

        <div className={'flex items-center'}>

        </div>
    </>
}
