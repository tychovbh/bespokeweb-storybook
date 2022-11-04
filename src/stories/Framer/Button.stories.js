import React from 'react'
import {Framer} from 'bespokeweb-storybook'

export default {
    title: 'Example/Framer/Button',
    component: Framer.Button,
    argTypes: {},
};

const Template = (args) => <Framer.Button {...args}/>;

export const Button = Template.bind({});
Button.args = {};
