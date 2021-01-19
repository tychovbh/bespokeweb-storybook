import React from 'react';
import * as Layouts from '../components/Layouts/Layouts'
import * as Dashboards from '../components/Dashboards/Dashboards';
import * as Navigations from '../components/Navigations/Navigations';
import * as Texts from '../components/Texts/Texts';
import * as Elements from '../components/Elements/Elements';

// Assets
import Logo from '../assets/world-wide-web.svg'
import Avatar from '../assets/profile.jpg'

export default {
    title: 'Example/Dashboards/Layouts',
    component: Dashboards.Container,
    argsTypes: {}
};

const Template = (args) => <div {...args}>
    <Navigations.Container>
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
    </Navigations.Container>

    <Dashboards.Header>
        <Layouts.Container appendClassname={'py-4'}>
            <Texts.Heading type={'h2'}>Dashboard</Texts.Heading>
        </Layouts.Container>
    </Dashboards.Header>

    <Dashboards.Content>
        <Layouts.Container appendClassname={'h-64 border-4 border-dashed rounded-lg my-4'}>
        </Layouts.Container>
    </Dashboards.Content>
</div>

export const Default = Template.bind({})
Default.args = {}