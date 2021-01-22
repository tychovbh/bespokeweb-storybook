import React from "react";
import '../../styles/style.css';
import {Forms} from '../../'

export default {
    title: 'Example/Forms/Checkbox',
    component: Forms.Checkbox,
    argsTypes: {}
}

const Template = (args) => <Forms.Checkbox {...args}/>;

export const Default = Template.bind({});
Default.args = {};