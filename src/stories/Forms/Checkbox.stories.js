import React from "react";
import 'bespokeweb-storybook/styles/style.css';
import {Forms} from 'bespokeweb-storybook'

export default {
    title: 'Example/Forms/Checkbox',
    component: Forms.Checkbox,
    argsTypes: {}
}

const Template = (args) => <Forms.Checkbox {...args}/>;

export const Default = Template.bind({});
Default.args = {};
