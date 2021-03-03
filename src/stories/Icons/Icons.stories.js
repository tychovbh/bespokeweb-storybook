import React from 'react'
import '../../styles/style.css'
import {Icons} from '../../'

export default {
    title: 'Example/Icons',
    component: Icons,
    argsTypes: {}
}

const Template = (args) => <Icons.Icon {...args} />;

export const Arrow_down = Template.bind({});
Arrow_down.args = {
    name: 'arrow-down',
    className: 'w-64'
};

export const Arrow_up = Template.bind({});
Arrow_up.args = {
    name: 'arrow-up',
    className: 'w-64'
};

export const Check = Template.bind({});
Check.args = {
    name: 'check',
    className: 'w-64'
};

export const Check_circle = Template.bind({});
Check_circle.args = {
    name: 'check-circle',
    className: 'w-64'
};

export const Cloud_upload = Template.bind({});
Cloud_upload.args = {
    name: 'cloud-upload',
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

export const Home = Template.bind({});
Home.args = {
    name: 'home',
    className: 'w-64'
};

export const Menu = Template.bind({});
Menu.args = {
    name: 'menu',
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

export const Play = Template.bind({});
Play.args = {
    name: 'play',
    className: 'w-64'
};

export const Share = Template.bind({});
Share.args = {
    name: 'share',
    className: 'w-64'
};

export const Trash = Template.bind({});
Trash.args = {
    name: 'trash',
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

