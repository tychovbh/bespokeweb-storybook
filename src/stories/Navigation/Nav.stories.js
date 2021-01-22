import React from "react";
import '../../styles/style.css';
import {Navigations} from '../../';

export default {
    title: 'Example/Navigations/Nav',
    component: Navigations.Nav,
    argsTypes: {}
}

const Template = (args) => <Navigations.Nav {...args}>

</Navigations.Nav>;

export const Default = Template.bind({});
Default.args = {};
