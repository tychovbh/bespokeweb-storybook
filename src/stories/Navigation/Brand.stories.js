import React from "react";
import 'bespokeweb-storybook/styles/style.css';
import {Navigations, Texts} from 'bespokeweb-storybook'
import Logo from "../../assets/world-wide-web.svg"

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
