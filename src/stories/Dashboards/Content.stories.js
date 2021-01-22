import React from 'react';
import '../../styles/style.css';
import {Dashboards, Layouts} from '../../';

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