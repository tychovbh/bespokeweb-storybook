import React from 'react';
import {Button} from './Button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {},
};

const Template = (args) => <Button {...args} />;

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