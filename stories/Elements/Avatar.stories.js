import React from 'react'
import {Avatar} from "./Elements";
import Profile from '../assets/profile.jpg'

export default {
    title: 'Example/Elements/Avatar',
    component: Avatar,
    argsTypes: {}
}

const Template = (args) => <Avatar {...args} />

export const Circular = Template.bind({})
Circular.args = {
    img: Profile,
    type: 'circular'
}
export const Circular_notification = Template.bind({})
Circular_notification.args = {
    img: Profile,
    type: 'circular-notification',
    notificationColor: '#059669'
}

export const Rounded = Template.bind({})
Rounded.args = {
    img: Profile,
    type: 'rounded'
}

export const Rounded_notification = Template.bind({})
Rounded_notification.args = {
    img: Profile,
    type: 'rounded-notification'
}