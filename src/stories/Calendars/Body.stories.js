import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'

export default {
    title: 'Components/Calendars/Body',
    component: Calendars.Body,
    argTypes: {},
}

const Template = (args) => <Calendars.Body {...args}/>

export const Body = Template.bind({})
Body.args = {
}
