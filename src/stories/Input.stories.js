import React from 'react';
import {Input} from '../components/Forms';
import '../styles/style.css';


export default {
    title: 'Example/Forms/Input',
    component: Input,
    argTypes: {},
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
    type: 'text'
};

export const Password = Template.bind({});
Password.args = {
    type: 'password'
};
