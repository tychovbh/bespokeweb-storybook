import React from "react";
import '../../styles/style.css';
import {Navigations} from '../../';

export default {
    title: 'Example/Navigations/Container',
    component: Navigations.Container,
    argsTypes: {}
}

const Template = (args) => <Navigations.Container {...args}>

</Navigations.Container>;

export const Default = Template.bind({});
Default.args = {};