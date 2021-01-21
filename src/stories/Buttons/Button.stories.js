import React from 'react';
import '../../styles/style.css'
import {Buttons} from '../../';

export default {
    title: 'Example/Buttons/Button',
    component: Buttons.Button,
    argTypes: {},
};

const Template = (args) => <Buttons.Button {...args}/>;

export const Default = Template.bind({});
Default.args = {
    children: 'Default',
    type: 'default'
};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
    type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary',
    type: 'secondary'
};

export const Success = Template.bind({});
Success.args = {
    children: 'Success',
    type: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
    children: 'Danger',
    type: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
    children: 'Warning',
    type: 'warning'
};

export const Info = Template.bind({});
Info.args = {
    children: 'Info',
    type: 'info'
};

export const Light = Template.bind({});
Light.args = {
    children: 'Light',
    type: 'light'
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Dark',
    type: 'dark'
};
export const Link = Template.bind({});
Link.args = {
    children: 'Link',
    type: 'link'
};
