import React from "react";
import 'bespokeweb-storybook/styles/style.css';
import {Forms} from 'bespokeweb-storybook'

export default {
    title: 'Example/Forms/Input',
    component: Forms.Input,
    argsTypes: {}
}

const Template = (args) => <Forms.Input {...args} />;

export const Text = Template.bind({});
Text.args = {
    type: 'text'
};

export const Password = Template.bind({});
Password.args = {
    type: 'password'
};

export const Hidden = Template.bind({});
Hidden.args = {
    type: 'hidden'
};

export const Number = Template.bind({});
Number.args = {
    type: 'number'
};

export const Date = Template.bind({});
Date.args = {
    type: 'date'
};

export const Time = Template.bind({});
Time.args = {
    type: 'time'
};
