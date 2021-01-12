import React from "react";
import * as Modals from './Modals';
import * as Texts from "../Texts/Texts";
import {Body} from "./Modals";
import {Button} from "../Button";

export default {
    title: 'Example/Modals',
    component: Modals.Modal,
    argsTypes: {}
};

const Template = (args) => <Modals.Modal>
    <Modals.Body>
        <Modals.Content>
            <Modals.Title>Deactivate account</Modals.Title>
            <Texts.Primary>
                Are you sure you want to deactivate your account? All of your data will be permanently removed. This
                action cannot be undone.
            </Texts.Primary>
        </Modals.Content>
        <Modals.Footer>
            <Button type={'default'}>Close</Button><Button type={'danger'}>Deactivate</Button>
        </Modals.Footer>
    </Modals.Body>
</Modals.Modal>;

export const Default = Template.bind({});
Default.args = {}