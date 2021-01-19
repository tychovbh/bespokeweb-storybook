import React from 'react';
import '../styles/style.css';
import {Question} from "../components/Forms/Question";
import {Checkbox} from "../components/Forms/Checkbox";
import {Button} from "../components/Buttons/Button";

export default {
    title: 'Example/forms/Question',
    component: Question,
    argsTypes: {}
}

const Template = (args) => <Question {...args}>
    <Checkbox/> By selecting this, you agree to the <Button type={'link'}>Privacy Policy</Button> and <Button
    type={'link'}>Cookie Policy</Button>
</Question>;

export const Default = Template.bind({});
Default.args = {
    children: ''
};