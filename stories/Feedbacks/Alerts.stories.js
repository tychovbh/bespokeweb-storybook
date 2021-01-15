import React from "react";
import * as Feedback from './Feedbacks'
import * as Texts from '../Texts/Texts'

export default {
    title: 'Example/Feedback/Alerts',
    component: Feedback.Alert,
    argsTypes: {}
}

const Template = (args) => <Feedback.Alert {...args}>
    <Texts.Heading type={'h4'}>Attention needed</Texts.Heading>
    <Texts.Primary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
        totam eius aperiam dolorum.
    </Texts.Primary>
</Feedback.Alert>;

export const Default = Template.bind({});
Default.args = {
    type: 'default'
};

export const Information = Template.bind({});
Information.args = {
    type: 'information'
};

export const Warning = Template.bind({});
Warning.args = {
    type: 'warning'
};