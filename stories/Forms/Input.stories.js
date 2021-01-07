import React from 'react';

import { Input } from './Input';

export default {
    title: 'Example/Forms/Input',
    component: Input,
    argTypes: {

    },
};

const Template = (args) => <Input {...args} />;

export const Field = Template.bind({});
Field.args = {

};
