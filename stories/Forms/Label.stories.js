import React from 'react'

import { Label  } from './Label'

export default {
    title: 'Example/Forms/Label',
    component: Label,
    argTypes: {

    }
}

const Template = (args) => <Label {...args}/>;

export const Text = Template.bind({});

Text.args = {
    children: 'Text'
};