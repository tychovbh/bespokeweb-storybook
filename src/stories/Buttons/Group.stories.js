import React from 'react';
import '../../styles/style.css'
import {Buttons} from '../../';

export default {
    title: 'Example/Buttons/Group',
    component: Buttons.Group,
    argTypes: {},
};

const Template = (args) => <Buttons.Group {...args}>
    <Buttons.Download>Download 1</Buttons.Download>
    <Buttons.Download>Download 2</Buttons.Download>
</Buttons.Group>;

export const Default = Template.bind({});
Default.args = {
};
