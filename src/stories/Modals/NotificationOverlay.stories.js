import React from 'react';
import '../../styles/style.css';
import {Modals} from '../../';

export default {
    title: 'Example/Modals/Notification/Overlay',
    component: Modals.NotificationOverlay,
    argsTypes: {}
}

const Template = (args) => {
    return <Modals.NotificationOverlay {...args}>
        <Modals.Notification
            title="Discussion archived"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        />
        <Modals.Notification
            type={'warning'}
            title="Discussion archived"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        />
        <Modals.Notification
            type={'danger'}
            title="Discussion archived"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        />
    </Modals.NotificationOverlay>
};

export const Default = Template.bind({});
Default.args = {};
