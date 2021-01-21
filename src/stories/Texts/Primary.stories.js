import React from 'react';
import '../../styles/style.css';
import {Texts} from '../../';

export default {
    title: 'Example/Texts/Primary',
    component: Texts.Primary,
    argsTypes: {}
}

const Template = (args) => <Texts.Primary {...args}/>;

export const Default = Template.bind();
Default.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};