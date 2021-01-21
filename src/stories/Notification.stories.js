import React from "react";
import '../styles/style.css';
import * as Modals from '../components/Modals/Modals';
import * as Texts from '../components/Texts/Texts';

export default {
    title: 'Example/Modals/Notifications',
    component: Modals.Notification,
    argsTypes: {}
}

const Template = (args) => <Modals.Notification {...args}>
    <Texts.Heading type={'h4'}>Successfully saved!</Texts.Heading>
    {/*<Texts.Primary>Anyone with a link can now view this file</Texts.Primary>*/}
</Modals.Notification>;

export const Success = Template.bind({});
Success.args = {
    type: 'success'
};