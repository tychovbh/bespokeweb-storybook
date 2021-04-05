import React from 'react';
import 'bespokeweb-storybook/styles/style.css';
import {Dashboards, Texts, Layouts} from 'bespokeweb-storybook';

export default {
    title: 'Example/Dashboards/Header',
    component: Dashboards.Header,
    argsTypes: {}
}

const Template = (args) => <Dashboards.Header {...args}>
    <Layouts.Container appendClassname={'py-4'}>
        <Texts.Heading type={'h1'}>Dashboard</Texts.Heading>
    </Layouts.Container>
</Dashboards.Header>;

export const Default = Template.bind({});
Default.args = {};
