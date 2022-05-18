import React, {useState} from "react"
import 'bespokeweb-storybook/styles/style.css'
import {Modals, Buttons} from 'bespokeweb-storybook'

export default {
    title: 'Example/Modals/Modal',
    component: Modals.Modal,
    argsTypes: {}
}

const Template = ({animated}) => {
    const [open, setOpen] = useState(false)

    return <div>
        <Buttons.Button type={'primary'} onClick={() => setOpen(true)}>Open modal</Buttons.Button>

        <Modals.Modal animate={animated} open={open} onClose={() => setOpen(false)}>
            <Modals.Panel animate={animated}>
                <Modals.Title>Deleting</Modals.Title>

                <Modals.Body>
                    Are you sure you want to delete this record?
                </Modals.Body>

                <Modals.Footer>
                    <Buttons.Button type={'danger'} onClick={() => setOpen(false)}>
                        Delete
                    </Buttons.Button>
                </Modals.Footer>
            </Modals.Panel>
        </Modals.Modal>
    </div>
}

export const Default = Template.bind({})
Default.args = {}

export const Animated = Template.bind({})
Animated.args = {
    animated: true
}
