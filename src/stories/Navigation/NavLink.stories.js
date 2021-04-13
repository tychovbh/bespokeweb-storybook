import React from "react";
import 'bespokeweb-storybook/styles/style.css';
import {Navigations} from 'bespokeweb-storybook';

export default {
    title: 'Example/Navigations/NavLink',
    component: Navigations.NavLink,
    argsTypes: {}
}

const Template = (args) => <Navigations.NavLink {...args}>

</Navigations.NavLink>;

export const Default = Template.bind({});
Default.args = {
    children: 'Dashboard'
};
export const Active = Template.bind({});
Active.args = {
    children: 'Dashboard',
    active: true
};
