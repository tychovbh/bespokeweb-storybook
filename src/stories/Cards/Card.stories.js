import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Cards} from 'bespokeweb-storybook'

export default {
    title: 'Components/Cards/Card',
    component: Cards.Card,
    argTypes: {},
}

const Template = (args) => <Cards.Card {...args}>
    <div className={'p-4'}>
        Item 1
    </div>
    <div className={'p-4'}>
        Item 2
    </div>
    <div className={'p-4'}>
        Item 3
    </div>
</Cards.Card>

export const Default = Template.bind({})
Default.args = {}
