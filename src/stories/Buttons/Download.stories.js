import React from 'react';
import 'bespokeweb-storybook/styles/style.css'
import {Buttons} from 'bespokeweb-storybook';

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
