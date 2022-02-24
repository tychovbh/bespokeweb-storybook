import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Calendars, Texts} from 'bespokeweb-storybook'

export default {
    title: 'Components/Calendars/Container',
    component: Calendars.Container,
    argTypes: {},
}

const Template = (args) => {
    return <Calendars.Container {...args} appendClassName={'border-4 border-dashed rounded h-64'}/>
}

export const Container = Template.bind({})
Container.args = {}
