import React from "react";
import '../../styles/style.css'
import {Forms} from '../../'

export default {
    title: 'Example/Forms/File',
    component: Forms.File,
    argsTypes: {}
}

const Template = (args) => <Forms.File {...args}/>;

export const Default = Template.bind({});
Default.args = {
    label: 'Choose file',
    placeholder: 'No file chosen'
};