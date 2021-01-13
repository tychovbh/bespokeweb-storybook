import React from 'react';
import * as Navigation from "./Navigation";
import Logo from '../assets/code-brackets.svg';

export default {
    title: 'Example/Navigation',
    component: Navigation.Container,
    argsTypes: {}
};

const Template = (args) => <Navigation.Container {...args}>
    <Navigation.Brand img={Logo}/>
    <Navigation.Nav>
        <Navigation.NavLink>Dashboard</Navigation.NavLink>
        <Navigation.NavLink>Team</Navigation.NavLink>
        <Navigation.NavLink>Projects</Navigation.NavLink>
        <Navigation.NavLink>Calendar</Navigation.NavLink>
    </Navigation.Nav>
</Navigation.Container>

export const Simple_dark = Template.bind({});
Simple_dark.args = {};

