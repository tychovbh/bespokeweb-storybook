import React from "react";
import {Heading} from './Heading'

export default {
    title: 'Example/Texts/Heading',
    component: Heading,
    argsTypes: {}
}

const Template = (args) => <Heading {...args}/>;

export const H1 = Template.bind({});
H1.args = {
    children: 'H1 Heading',
    type: 'h1'
};

export const H2 = Template.bind({});
H2.args = {
    children: 'H2 Heading',
    type: 'h2'
};
export const H3 = Template.bind({});
H3.args = {
    children: 'H3 Heading',
    type: 'h3'
};
export const H4 = Template.bind({});
H4.args = {
    children: 'H4 Heading',
    type: 'h4'
};
export const H5 = Template.bind({});
H5.args = {
    children: 'H5 Heading',
    type: 'h5'
};
export const H6 = Template.bind({});
H6.args = {
    children: 'H6 Heading',
    type: 'h6'
};