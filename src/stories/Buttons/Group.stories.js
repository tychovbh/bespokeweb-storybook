import React from 'react';
import 'bespokeweb-storybook/styles/style.css'
import {Buttons, Icons} from 'bespokeweb-storybook'

export default {
    title: 'Example/Buttons/Group',
    component: Buttons.Group,
    argTypes: {},
};

const Template = (args) => <Buttons.Group {...args}>
    <Buttons.Button type={'primary'}>
        Button 1
    </Buttons.Button>

    <Buttons.Button type={'primary'}>
        Button 2
    </Buttons.Button>
</Buttons.Group>;

export const Group = Template.bind({});
Group.args = {
    appendClassname: 'divide-x'
};
