import React from 'react';
import '../../styles/style.css';
import {Texts} from '../../';

export default {
    title: 'Example/Texts/Heading',
    component: Texts.Heading,
    argsTypes: {}
}

const Template = (args) => <Texts.Heading {...args}/>;

export const H1 = Template.bind({});
H1.args = {
    type: 'h1',
    children: 'Heading 1'
};

export const H2 = Template.bind({});
H2.args = {
    type: 'h2',
    children: 'Heading 2'
};

export const H3 = Template.bind({});
H3.args = {
    type: 'h3',
    children: 'Heading 3'
};

export const H4 = Template.bind({});
H4.args = {
    type: 'h4',
    children: 'Heading 4'
};

export const H5 = Template.bind({});
H5.args = {
    type: 'h5',
    children: 'Heading 5'
};

export const H6 = Template.bind({});
H6.args = {
    type: 'h6',
    children: 'Heading 6'
};