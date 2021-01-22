import React from "react";
import '../../styles/style.css';
import {Navigations} from '../../';

export default {
    title: 'Example/Navigations/Brand',
    component: Navigations.Brand,
    argsTypes: {}
}

const Template = (args) => <Navigations.Brand {...args} />;

export const Default = Template.bind({});
Default.args = {};