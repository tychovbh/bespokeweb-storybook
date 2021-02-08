import React from 'react'
import '../../styles/style.css'
import {Loaders} from '../../'

export default {
    title: 'Example/Loaders/Circle',
    component: Loaders.Circle,
    argsTypes: {}
}

const Template = (args) => <Loaders.Circle {...args} />

export const Default = Template.bind({})
Default.args = {

}