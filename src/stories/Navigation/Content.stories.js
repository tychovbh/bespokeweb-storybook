import React from 'react';
import '../../styles/style.css';
import {Navigations} from '../../';

export default {
    title: 'Example/Navigations/Content',
    component: Navigations.Content,
    argsTypes: {}
}

const Template = (args) => <Navigations.Content {...args}>

</Navigations.Content>;

export const Default = Template.bind({});
Default.args = {};
