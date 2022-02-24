import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Calendars} from 'bespokeweb-storybook'

export default {
    title: 'Components/Calendars/Heads',
    component: Calendars.Heads.Container,
    argTypes: {},
}

const Template = (args) => <Calendars.Heads.Container>
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

export const Container = Template.bind({})
Container.args = {}
