import React from "react";
import '../../styles/style.css'
import {Lists, Texts} from '../../'

export default {
    title: 'Example/Lists/Header',
    components: Lists.Header,
    argsTypes: {}
}

const Template = (args) => <Lists.Header {...args}>
    <Texts.Heading type={'h3'}>Applicant Information</Texts.Heading>
    <Texts.Primary>Personal details and application.</Texts.Primary>
</Lists.Header>;

export const Default = Template.bind({});
Default.args = {};