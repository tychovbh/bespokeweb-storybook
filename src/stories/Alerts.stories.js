import React from "react";
import '../styles/style.css'
import * as Feedback from '../components/Feedbacks/Feedbacks';
import * as Texts from '../components/Texts/Texts';
import {Button} from '../components/Buttons/Buttons';

export default {
    title: 'Example/Feedback/Alerts',
    component: Feedback.Alert,
    argsTypes: {}
}

const Template = (args) => <Feedback.Alert {...args}>
    <Texts.Heading type={'h4'}>Attention needed</Texts.Heading>
    <Texts.Primary>
        Lorem ipsum dolor sit amet consectetur <Button type={'link'}>adipisicing</Button> elit. Aliquid pariatur, ipsum similique veniam quo
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

export const Success = Template.bind({});
Success.args = {
    type: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
    type: 'warning'
};

export const Danger = Template.bind({});
Danger.args = {
    type: 'danger'
};