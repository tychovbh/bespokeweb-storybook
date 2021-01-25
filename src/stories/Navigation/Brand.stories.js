import React from "react";
import '../../styles/style.css';
import {Navigations} from '../../';
import Logo from "../../assets/world-wide-web.svg";
import {Texts} from "../../index";

export default {
    title: 'Example/Navigations/Brand',
    component: Navigations.Brand,
    argsTypes: {}
}

const Template = (args) => <Navigations.Brand {...args}>
    <Navigations.BrandImage img={Logo}/>
    <Texts.Heading type={'h2'}>Bespoke Web</Texts.Heading>
</Navigations.Brand>;

export const Default = Template.bind({});
Default.args = {};
