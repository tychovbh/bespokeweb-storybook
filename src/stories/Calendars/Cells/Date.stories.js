import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'
import {days} from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Components/Calendars/Cells',
    component: Calendars.Cells.Date,
    argTypes: {},
}

const Template = (args) => <Calendars.Cells.Date {...args}>
    {days[7].date.split('-').pop().replace(/^0/, '')}
</Calendars.Cells.Date>

export const Date = Template.bind({})
Date.args = {
    date: days[7].date,
    isSelected: days[7].isSelected,
    isToday: days[7].isToday,

}
