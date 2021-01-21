import React from 'react';
import '../../styles/style.css'
import {Buttons} from '../../';

export default {
    title: 'Example/Buttons/Download',
    component: Buttons.Download,
    argTypes: {},
};

const Template = (args) => <Buttons.Download {...args}/>;

export const Default = Template.bind({});
Default.args = {
    children: 'Download link',
    type: 'default'
};
