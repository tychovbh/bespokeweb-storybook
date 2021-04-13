import React from "react";
import 'bespokeweb-storybook/styles/style.css'
import {Elements} from 'bespokeweb-storybook'
import Profile from '../../assets/profile.jpg'

export default {
    title: 'Example/Elements/Avatar',
    component: Elements.Avatar,
    argsTypes: {}
}

const Template = (args) => <Elements.Avatar {...args} />;

export const Circular = Template.bind({});
Circular.args = {
    type: 'circular',
    img: Profile
};

export const Circular_Notification = Template.bind({});
Circular_Notification.args = {
    type: 'circular-notification',
    img: Profile,
    notificationColor: 'green-400'
};

export const Rounded = Template.bind({});
Rounded.args = {
    type: 'rounded',
    img: Profile
};

export const Rounded_Notification = Template.bind({});
Rounded_Notification.args = {
    type: 'rounded-notification',
    img: Profile,
    notificationColor: 'green-400'
};
