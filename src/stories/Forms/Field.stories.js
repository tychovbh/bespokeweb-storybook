import React from "react";
import '../../styles/style.css';
import {Forms} from '../../'

export default {
    title: 'Example/Forms/Field',
    component: Forms.Field,
    argsTypes: {}
}

const Template = (args) => <Forms.Field {...args}>
    <Forms.Label htmlFor={'text-input'}>Label</Forms.Label>
    <Forms.Input id={'text-input'}/>
</Forms.Field>;

export const Default = Template.bind({});
Default.args = {
    type: 'default'
};

export const Inline = Template.bind({});
Inline.args = {
    type: 'inline'
};

