import React from 'react';
import {Field} from '../components/Forms'
import {Label} from '../components/Forms'
import {Input} from '../components/Forms'
import '../styles/style.css'

export default {
    title: 'Example/Forms/Field',
    component: Field,
    argTypes: {},
};

const Template = (args) => <Field {...args}>
    <Label htmlFor={'text-input'}>Label</Label>
    <Input id={'text-input'}/>
</Field>

export const Default = Template.bind({});
Default.args = {
    type: 'default'
};

export const Inline = Template.bind({});
Inline.args = {
    type: 'inline'
};

