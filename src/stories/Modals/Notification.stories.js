import React from 'react';
import '../../styles/style.css';
import {Modals} from '../../';

export default {
    title: 'Example/Modals/Notification',
    component: Modals.Notification,
    argsTypes: {}
}

const NotificationTemplate = (args) => <Modals.Notification {...args} />;

export const Default = NotificationTemplate.bind({});
Default.args = {
    title: 'Discussion archived',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    type: 'default'
};