import React from "react";
import '../../styles/style.css';
import {Forms, Buttons} from '../../'

export default {
    title: 'Example/Forms/Question',
    component: Forms.Question,
    argsTypes: {}
}

const Template = (args) => <Forms.Question {...args}>
    <Forms.Checkbox/> By selecting this, you agree to the <Buttons.Button type={'link'}>Privacy
    Policy</Buttons.Button> and <Buttons.Button type={'link'}>Cookie Policy</Buttons.Button>
</Forms.Question>;

export const Default = Template.bind({});
Default.args = {
    children: ''
};
