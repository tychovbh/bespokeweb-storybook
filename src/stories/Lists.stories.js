import React from "react";
import '../styles/style.css';
import * as Lists from '../components/Lists/Lists';
import * as Texts from '../components/Texts/Texts'
import * as Buttons from "../components/Buttons/Buttons";

export default {
    title: 'Example/Lists',
    component: Lists,
    argsTypes: {}
}

const Template = (args) => <Lists.Container {...args}>
    <Lists.Header>
        <Texts.Heading type={'h3'}>Applicant Information</Texts.Heading>
        <Texts.Primary>Personal details and application.</Texts.Primary>
    </Lists.Header>
    <Lists.Row>
        <Lists.Column type={'dt'}>Full name</Lists.Column>
        <Lists.Column type={'dd'} colSpan={2}>Margot Foster</Lists.Column>
    </Lists.Row>
    <Lists.Row>
        <Lists.Column type={'dt'}>Application for</Lists.Column>
        <Lists.Column type={'dd'} colSpan={2}>Backend Developer</Lists.Column>
    </Lists.Row>
    <Lists.Row>
        <Lists.Column type={'dt'}>Email address</Lists.Column>
        <Lists.Column type={'dd'} colSpan={2}>margotfoster@example.com</Lists.Column>
    </Lists.Row>
    <Lists.Row>
        <Lists.Column type={'dt'}>Salary expection</Lists.Column>
        <Lists.Column type={'dd'} colSpan={2}>&euro;120,000</Lists.Column>
    </Lists.Row>
    <Lists.Row>
        <Lists.Column type={'dt'}>About</Lists.Column>
        <Lists.Column type={'dd'} colSpan={2}>
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa
            consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia
            proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
        </Lists.Column>
    </Lists.Row>
    <Lists.Row>
        <Lists.Column type={'dt'}>Attachment</Lists.Column>
        <Lists.Column type={'dd'} colSpan={2}>
                <Buttons.Download>resume_back_end_developer.pdf</Buttons.Download>
        </Lists.Column>
    </Lists.Row>
</Lists.Container>;

export const Default = Template.bind({});
Default.args = {
    appendClassname: 'w-3/5 mx-auto'
};

