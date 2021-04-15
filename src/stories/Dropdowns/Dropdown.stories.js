import React, {useState} from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Dropdowns, Buttons} from 'bespokeweb-storybook'

export default {
    title: 'Example/Dropdowns/Dropdown',
    components: Dropdowns.Dropdown,
    args: {}
}

const Template = (args) => {
    const [open, setOpen] = useState(false)

    return <div className={'relative'}>
        <Buttons.Button {...args} onClick={() => setOpen(!open)} type={'primary'}>
            open
        </Buttons.Button>

        <Dropdowns.Dropdown open={open} align={'left'} onClose={() => setOpen(!open)}>
            <Dropdowns.Link>link 1</Dropdowns.Link>
            <Dropdowns.Link>link 2</Dropdowns.Link>
        </Dropdowns.Dropdown>
    </div>
}

export const Dropdown = Template.bind({})
Dropdown.args = {}
