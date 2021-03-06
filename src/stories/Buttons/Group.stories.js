import React from 'react';
import {Buttons} from 'bespokeweb-storybook'
import 'bespokeweb-storybook/styles/style.css'

export default {
    title: 'Example/Buttons/Group',
    component: Buttons.Group,
    argTypes: {},
};

const Template = (args) => <Buttons.Group {...args}>
    <Buttons.Download>Download 1</Buttons.Download>
    <Buttons.Download>Download 2</Buttons.Download>
</Buttons.Group>;

export const Group = Template.bind({});
Group.args = {
};
