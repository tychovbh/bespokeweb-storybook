import React from "react";
import '../../styles/style.css';
import {Feedbacks, Texts, Buttons} from '../../';

export default {
    title: 'Example/Feedbacks/Alert',
    component: Feedbacks.Alert,
    argsTypes: {}
}

const Template = (args) => <Feedbacks.Alert {...args}>
    <Texts.Heading type={'h4'}>Attention needed</Texts.Heading>
    <Texts.Primary>
        Lorem ipsum dolor sit amet consectetur <Buttons.Button type={'link'}>adipisicing</Buttons.Button> elit. Aliquid pariatur, ipsum similique veniam quo
        totam eius aperiam dolorum.
    </Texts.Primary>
</Feedbacks.Alert>;

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
