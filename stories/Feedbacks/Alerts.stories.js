import React from "react";
import * as Feedback from './Feedbacks'
import * as Texts from '../Texts/Texts'

export default {
    title: 'Example/Feedback/Alerts',
    component: Feedback.Alert,
    argsTypes: {}
}

const Template = (args) => <Feedback.Alert {...args}>
    <Texts.Heading>Title</Texts.Heading>
</Feedback.Alert>;

export const Default = Template.bind({});
Default.args = {
    type: 'default'
};