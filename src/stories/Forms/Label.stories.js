import React from "react";
import 'bespokeweb-storybook/styles/style.css';
import {Forms} from 'bespokeweb-storybook'

export default {
    title: 'Example/Forms/Label',
    component: Forms.Label,
    argsTypes: {}
}

const Template = (args) => <Forms.Label {...args}/>;

export const Default = Template.bind({});
Default.args = {
    children: 'Label'
};
