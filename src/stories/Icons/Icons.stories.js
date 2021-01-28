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
    name: 'check-circle',
    className: 'w-64'
};
export const Exclamation = Template.bind({});
Exclamation.args = {
    name: 'exclamation',
    className: 'w-64'
};

export const Exclamation_shield = Template.bind({});
Exclamation_shield.args = {
    name: 'exclamation-shield',
    className: 'w-64'
};

export const Eye = Template.bind({});
Eye.args = {
    name: 'eye',
    className: 'w-64'
};

export const Pencil = Template.bind({});
Pencil.args = {
    name: 'pencil',
    className: 'w-64'
};

export const Pencil_alt = Template.bind({});
Pencil_alt.args = {
    name: 'pencil-alt',
    className: 'w-64'
};

export const X = Template.bind({});
X.args = {
    name: 'x',
    className: 'w-64'
};

export const X_circle = Template.bind({});
X_circle.args = {
    name: 'x-circle',
    className: 'w-64'
};

