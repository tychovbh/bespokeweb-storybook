import React from "react";
import '../../styles/style.css';
import {Modals, Buttons} from '../../';

export default {
    title: 'Example/Modals/Footer',
    component: Modals.Footer,
    argsTypes: {}
}

const Template = (args) => <Modals.Footer>
    <Buttons.Button type={'default'} onClick={args.onClose}>Close</Buttons.Button>
    <Buttons.Button type={'danger'}>Deactivate</Buttons.Button>
</Modals.Footer>;

export const Default = Template.bind({});
Default.args = {};
