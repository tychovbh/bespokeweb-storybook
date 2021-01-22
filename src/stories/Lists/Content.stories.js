import React from "react";
import '../../styles/style.css'
import {Lists} from '../../'

export default {
    title: 'Example/Lists/Content',
    components: Lists.Content,
    argsTypes: {}
}

const Template = (args) => <Lists.Content {...args}>
</Lists.Content>;

export const Default = Template.bind({});
Default.args = {};