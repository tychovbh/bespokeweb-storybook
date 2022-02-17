import React from 'react';
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'

export default {
    title: 'Components/Calendars/Date Select',
    component: Calendars.DateSelect,
    argTypes: {},
}

const Template = (args) => <Calendars.DateSelect {...args}/>

export const DateSelect = Template.bind({})
DateSelect.args = {}
