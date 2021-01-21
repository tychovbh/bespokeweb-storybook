import React, {useState} from "react";
import '../styles/style.css';
import * as Modals from '../components/Modals/Modals';
import * as Texts from "../components/Texts/Texts";
import {Button} from "../components/Buttons/Buttons";

export default {
    title: 'Example/Modals/Modals',
    component: Modals.Modal,
    argsTypes: {}
};

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
            <Button type={'default'} onClick={args.onClose}>Close</Button>
            <Button type={'danger'}>Deactivate</Button>
        </Modals.Footer>
    </Modals.Container>
</Modals.Modal>;

const Template2 = (args) => {
    const [open, setOpen] = useState(false);
    return <>
        <Template {...args} open={open} onClose={() => setOpen(false)}/>
        <Button type={'primary'} onClick={() => setOpen(true)}>Open model</Button>
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
