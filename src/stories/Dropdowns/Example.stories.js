import React, {useState} from 'react'
import '../../styles/style.css'
import {Dropdowns, Buttons, Menus} from '../../'

export default {
    title: 'Example/Dropdowns',
    components: Dropdowns.Container,
    args: {}
}

const Template = (args) => {
    const [open, setOpen] = useState(false)

    return <div className={'relative'}>
        <Buttons.Button {...args} onClick={() => setOpen(!open)} type={'primary'}>
            open
        </Buttons.Button>

        <Dropdowns.Container open={open} align={'left'} onClose={() => setOpen(!open)}>
            <Dropdowns.Link>link 1</Dropdowns.Link>
            <Dropdowns.Link>link 2</Dropdowns.Link>
        </Dropdowns.Container>
    </div>
}

export const Example = Template.bind({})
Example.args = {}
