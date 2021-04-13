import React, {useState} from "react";
import 'bespokeweb-storybook/styles/style.css'
import {Forms} from 'bespokeweb-storybook'

export default {
    title: 'Example/Forms/File',
    component: Forms.File,
    argsTypes: {}
}

const Template = (args) => {
    const [file, setFile] = useState({})
    return <Forms.File value={file} onChange={file => setFile(file)} {...args}/>
};

export const Default = Template.bind({});
Default.args = {
    children: 'Choose file',
    placeholder: 'No file chosen',
};
