import React from "react";
import 'bespokeweb-storybook/styles/style.css';
import {Navigations, Elements, Texts} from 'bespokeweb-storybook';
import Logo from '../../assets/world-wide-web.svg'
import Avatar from '../../assets/profile.jpg'

export default {
    title: 'Example/Navigations/Topbar',
    component: Navigations.Topbar,
    argsTypes: {}
}

const Template = (args) => <Navigations.Topbar {...args}>
        <Navigations.Brand>
            <Navigations.BrandImage img={Logo}/>
            <Texts.Heading type={'h2'}>Bespoke Web</Texts.Heading>
        </Navigations.Brand>
        <Navigations.Nav>
            <Navigations.NavLink active>Dashboard</Navigations.NavLink>
            <Navigations.NavLink>Team</Navigations.NavLink>
            <Navigations.NavLink>Projects</Navigations.NavLink>
            <Navigations.NavLink>Calendar</Navigations.NavLink>
        </Navigations.Nav>
        <Elements.Avatar img={Avatar}/>
</Navigations.Topbar>;

export const Default = Template.bind({});
Default.args = {};
