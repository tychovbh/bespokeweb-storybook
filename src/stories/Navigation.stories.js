import React from 'react';
import '../components/Navigations/Navigations.css';
import * as Layouts from '../components/Layouts/Layouts'
import * as Navigation from "../components/Navigations/Navigations";
import * as Elements from '../components/Elements/Elements'
import Avatar from '../assets/profile.jpg'
import Logo from '../assets/world-wide-web.svg'
import * as Texts from '../components/Texts/Texts'

export default {
    title: 'Example/Navigations',
    component: Navigation.Container,
    argsTypes: {}
};

const Template = (args) => <Navigation.Container {...args}>
    <Layouts.Container>
        <Navigation.Content>
            <Navigation.Brand>
                <Navigation.BrandImage img={Logo}/>
                <Texts.Heading type={'h2'}>BespokeWeb</Texts.Heading>
            </Navigation.Brand>
            <Navigation.Nav>
                <Navigation.NavLink active>Dashboard</Navigation.NavLink>
                <Navigation.NavLink>Team</Navigation.NavLink>
                <Navigation.NavLink>Projects</Navigation.NavLink>
                <Navigation.NavLink>Calendar</Navigation.NavLink>
            </Navigation.Nav>
            <Elements.Avatar img={Avatar}/>
        </Navigation.Content>
    </Layouts.Container>
</Navigation.Container>;

export const Simple_dark = Template.bind({});
Simple_dark.args = {};

