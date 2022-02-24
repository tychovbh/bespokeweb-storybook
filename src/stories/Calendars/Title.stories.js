import React from 'react';
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'

export default {
    title: 'Components/Calendars/Title',
    component: Calendars.Title,
    argTypes: {},
}

const Template = (args) => <Calendars.Title {...args}/>

export const Title = Template.bind({})
Title.args = {
    dateTime: '2022-01',
    children: 'January 2022'
}
