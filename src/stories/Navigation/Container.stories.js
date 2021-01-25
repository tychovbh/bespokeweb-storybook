import React from "react";
import '../../styles/style.css';
import {Navigations, Layouts, Elements, Texts} from '../../';
import Logo from '../../assets/world-wide-web.svg'
import Avatar from '../../assets/profile.jpg'

export default {
    title: 'Example/Navigations/Container',
    component: Navigations.Container,
    argsTypes: {}
}

const Template = (args) => <Navigations.Container {...args}>
    <Layouts.Container>
        <Navigations.Content>
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
        </Navigations.Content>
    </Layouts.Container>
</Navigations.Container>;

export const Default = Template.bind({});
Default.args = {};