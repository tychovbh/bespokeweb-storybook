import React from "react";
import '../../styles/style.css'
import {Lists} from '../../'

export default {
    title: 'Example/Lists/Column',
    components: Lists.Column,
    argsTypes: {}
}

const Template = (args) => <Lists.Column {...args}>
    Column
</Lists.Column>;

export const Default = Template.bind({});
Default.args = {};