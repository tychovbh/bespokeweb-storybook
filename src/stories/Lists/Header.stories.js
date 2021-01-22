import React from "react";
import '../../styles/style.css'
import {Lists} from '../../'

export default {
    title: 'Example/Lists/Header',
    components: Lists.Header,
    argsTypes: {}
}

const Template = (args) => <Lists.Header {...args}>
</Lists.Header>;

export const Default = Template.bind({});
Default.args = {};