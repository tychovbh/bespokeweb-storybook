import React from "react";
import '../../styles/style.css';
import {Forms} from '../../'

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