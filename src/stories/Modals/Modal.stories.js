import React, {useState} from "react";
import '../../styles/style.css';
import {Modals, Buttons, Texts} from '../../';

export default {
    title: 'Example/Modals/Modal',
    component: Modals.Modal,
    argsTypes: {}
}

const Template = (args) => <Modals.Modal {...args}>
    <Modals.Container>
        <Modals.Body>
            <Texts.Heading type={'h3'} appendClassname={'mb-2'}>Deactivate account</Texts.Heading>
            <Texts.Primary>
                Are you sure you want to deactivate your account? All of your data will be permanently removed. This
                action cannot be undone.
            </Texts.Primary>
        </Modals.Body>
        <Modals.Footer>
            <Buttons.Button type={'default'} onClick={args.onClose}>Close</Buttons.Button>
            <Buttons.Button type={'danger'}>Deactivate</Buttons.Button>
        </Modals.Footer>
    </Modals.Container>
</Modals.Modal>;

const Template2 = (args) => {
    const [open, setOpen] = useState(false);
    return <>
        <Template {...args} open={open} onClose={() => setOpen(false)}/>
        <Buttons.Button type={'primary'} onClick={() => setOpen(true)}>Open model</Buttons.Button>
    </>
};

export const Hidden = Template.bind({});
Hidden.args = {
    open: false,
};

export const Shown = Template.bind({});
Shown.args = {
    open: true,
};

export const Simple = Template2.bind({});
Simple.args = {
    open: false,
};
