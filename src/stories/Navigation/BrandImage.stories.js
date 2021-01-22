import React from "react";
import '../../styles/style.css';
import {Navigations} from '../../';
import Logo from '../../assets/world-wide-web.svg'

export default {
    title: 'Example/Navigations/BrandImage',
    component: Navigations.BrandImage,
    argsTypes: {}
}

const Template = (args) => <Navigations.BrandImage {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: Logo
};