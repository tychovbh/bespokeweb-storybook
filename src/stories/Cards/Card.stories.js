import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Cards, Texts} from 'bespokeweb-storybook'

export default {
    title: 'Example/Cards/Card',
    component: Cards.Card,
    args: {}
}

const Template = (args) => <Cards.Card {...args}>
    <Texts.Heading>Card Title</Texts.Heading>
    <Texts.Primary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis eleifend quam vitae lobortis. Phasellus
        euismod augue sed sapien auctor iaculis. Ut finibus est ut tempor mattis.
    </Texts.Primary>
</Cards.Card>

export const Card = Template.bind({})
Card.args = {}
