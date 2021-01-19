import React from "react";
import {Checkbox} from "../components/Forms/Checkbox";
import '../styles/style.css';

export default {
    title: 'Example/Forms/Checkbox',
    component: Checkbox,
    argsTypes: {}
}

const Template = (args) => <Checkbox {...args}/>;

export const  Default = Template.bind({});
Default.args = {};