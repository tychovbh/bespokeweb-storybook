import React from "react";
import 'bespokeweb-storybook/styles/style.css'
import {Lists} from 'bespokeweb-storybook'

export default {
    title: 'Example/Lists/Column',
    components: Lists.Column,
    argsTypes: {}
}

const Template = (args) => <Lists.Column {...args}>
</Lists.Column>;

export const Dt = Template.bind({});
Dt.args = {
    type: 'dt',
    children: 'Full Name'
};

export const Dd = Template.bind({});
Dd.args = {
    type: 'dd',
    children: 'Margot Foster'
};
