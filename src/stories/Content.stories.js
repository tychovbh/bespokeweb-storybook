import React from 'react';
import '../styles/style.css';
import * as Layouts from '../components/Layouts/Layouts'
import * as Dashboards from '../components/Dashboards/Dashboards';

export default {
    title: 'Example/Dashboards/Content',
    component: Dashboards.Content,
    argsTypes: {}
};

const Template = (args) => <div {...args}>
    <Dashboards.Content>
        <Layouts.Container appendClassname={'h-64 border-4 border-dashed rounded-lg'}>
        </Layouts.Container>
    </Dashboards.Content>
</div>

export const Default = Template.bind({});
Default.args = {};