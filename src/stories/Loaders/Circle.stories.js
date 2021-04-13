import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Loaders} from 'bespokeweb-storybook'

export default {
    title: 'Example/Loaders/Circle',
    component: Loaders.Circle,
    argsTypes: {}
}

const Template = (args) => <Loaders.Circle {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary'
}

export const Success = Template.bind({})
Success.args = {
    type: 'success'
}

export const Warning = Template.bind({})
Warning.args = {
    type: 'warning'
}

export const Danger = Template.bind({})
Danger.args = {
    type: 'danger'
}

export const sm = Template.bind({})
sm.args = {
    size: 'sm'
}

export const md = Template.bind({})
md.args = {}

export const lg = Template.bind({})
lg.args = {
    size: 'lg'
}

export const xl = Template.bind({})
xl.args = {
    size: 'xl'
}
