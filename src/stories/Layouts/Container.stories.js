import React from "react";
import '../../styles/style.css';
import {Layouts} from '../../'

export default {
    title: 'Example/Layouts/Container',
    component: Layouts.Container,
    argsTypes: {}
}

const Template = (args) => <Layouts.Container {...args}>
    <div className={'h-64 border-4 border-dashed'}/>
</Layouts.Container>;

export const Container = Template.bind({});
Container.args = {};