import React from 'react'
import '../../styles/style.css'
import {Icons} from '../../'

export default {
    title: 'Example/Icons',
    component: Icons,
    argsTypes: {}
}

const Template = (args) => <Icons.Icon {...args} />;

export const Check_circle = Template.bind({});
Check_circle.args = {
    name: 'check-circle'
};