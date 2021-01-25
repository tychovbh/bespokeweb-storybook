import React from 'react';
import '../../styles/style.css';
import {Navigations} from '../../';
import {Elements, Texts} from "../../index";
import Logo from '../../assets/world-wide-web.svg'
import Avatar from '../../assets/profile.jpg'

export default {
    title: 'Example/Navigations/Content',
    component: Navigations.Content,
    argsTypes: {}
}

const Template = (args) => <Navigations.Content {...args}>
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
</Navigations.Content>;

export const Default = Template.bind({});
Default.args = {};
