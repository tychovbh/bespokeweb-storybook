import React from "react";
import {Checkbox} from "./Checkbox";

export default {
    title: 'Example/Forms/Checkbox',
    component: Checkbox,
    argsTypes: {}
}

const Template = (args) => <Checkbox {...args}/>;

export const  Default = Template.bind({});
Default.args = {};