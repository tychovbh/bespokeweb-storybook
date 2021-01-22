import React from "react";
import '../../styles/style.css';
import {Forms} from '../../'

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
