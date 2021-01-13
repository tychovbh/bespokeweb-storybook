import React, {useState} from "react";
import * as Modals from './Modals';
import * as Texts from "../Texts/Texts";
import {Body} from "./Modals";
import {Button} from "../Button";

export default {
    title: 'Example/Modals',
    component: Modals.Modal,
    argsTypes: {}
};

const Template = (args) => <Modals.Modal {...args}>
    <Modals.Container>
        <Modals.Body>
            <Modals.Title>Deactivate account</Modals.Title>
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </>
}

export const Hidden = Template.bind({})
Hidden.args = {
    open: false,
}

export const Shown = Template.bind({});
Shown.args = {
    open: true,
};

export const Simple = Template2.bind({});
Simple.args = {
    open: false,
}
