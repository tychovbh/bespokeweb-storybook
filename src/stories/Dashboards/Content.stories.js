import React from 'react';
import 'bespokeweb-storybook/styles/style.css';
import {Dashboards, Layouts} from 'bespokeweb-storybook';

export default {
    title: 'Example/Dashboards/Content',
    component: Dashboards.Content,
    argsTypes: {}
}

const Template = (args) => <Layouts.Container {...args}>
    <div className={'h-64 border-4 border-dashed'} />
</Layouts.Container>;

export const Default = Template.bind({});
Default.args = {
    appendClassname: 'storybook-dashboards-content'
};
