import React from 'react';
import 'bespokeweb-storybook/styles/style.css'
import {Buttons, Icons} from 'bespokeweb-storybook'

export default {
    title: 'Example/Buttons/Group',
    component: Buttons.Group,
    argTypes: {},
};

const Template = (args) => <Buttons.Group {...args}>
    <Buttons.Button appendClassname={'py-2 pl-3 pr-4 md:px-2'}>
        <Icons.Icon
            name={'ChevronLeft'}
            className={'w-5 text-gray-400'}
        />
    </Buttons.Button>

    <Buttons.Button appendClassname={'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}>
        Today
    </Buttons.Button>

    <Buttons.Button appendClassname={'py-2 pl-4 pr-3 md:px-2'}>
        <Icons.Icon
            name={'ChevronRight'}
            className={'w-5 text-gray-400'}
        />
    </Buttons.Button>
</Buttons.Group>;

export const Group = Template.bind({});
Group.args = {

};
