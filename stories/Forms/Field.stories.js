import React from 'react';

import {Field} from './Field';
import {Label} from "./Label";
import {Input} from "./Input";

export default {
    title: 'Example/Forms/Field',
    component: Field,
    argTypes: {},
};

const Template = (args) => <Field {...args}>
    <Label htmlFor={'text-input'}>Label</Label>
    <Input id={'text-input'}/>
</Field>;

export const Default = Template.bind({});
Default.args = {

};

export const Inline = Template.bind({});
Inline.args = {
    type: 'inline'
};

