import React from "react";
import '../../styles/style.css'
import {Lists} from '../../'

export default {
    title: 'Example/Lists/Container',
    components: Lists.Container,
    argsTypes: {}
}

const Template = (args) => <Lists.Container {...args}>
</Lists.Container>;

export const Default = Template.bind({});
Default.args = {};