import React from 'react';
import 'bespokeweb-storybook/styles/style.css';
import {Modals} from 'bespokeweb-storybook';

export default {
    title: 'Example/Modals/Notification',
    component: Modals.Notification,
    argsTypes: {}
}

const Template = (args) => <Modals.Notification {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Discussion archived',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
};

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    title: 'Discussion archived',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
};

export const Warning = Template.bind({});
Warning.args = {
    type: 'warning',
    title: 'Discussion archived',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
};

export const Danger = Template.bind({});
Danger.args = {
    type: 'danger',
    title: 'Discussion archived',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
};

