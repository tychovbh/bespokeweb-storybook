import React from "react";
import 'bespokeweb-storybook/styles/style.css';
import {Navigations} from 'bespokeweb-storybook';
import Logo from '../../assets/world-wide-web.svg'

export default {
    title: 'Example/Navigations/BrandImage',
    component: Navigations.BrandImage,
    argsTypes: {}
}

const Template = (args) => <Navigations.BrandImage {...args}/>;

export const Default = Template.bind({});
Default.args = {
    src: Logo,
    img: Logo
};
