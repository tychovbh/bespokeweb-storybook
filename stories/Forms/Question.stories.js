import React from 'react'
import {Question} from "./Question";
import {Checkbox} from "./Checkbox";
import {Button} from "../Button";

export default {
    title: 'Example/forms/Question',
    component: Question,
    argsTypes: {}
}

const Template = (args) => <Question {...args}>
    <Checkbox/> By selecting this, you agree to the <Button type={'link'}>Privacy Policy</Button> and <Button
    type={'link'}>Cookie Policy</Button>
</Question>

export const Default = Template.bind({});
Default.args = {
    children: ''
}