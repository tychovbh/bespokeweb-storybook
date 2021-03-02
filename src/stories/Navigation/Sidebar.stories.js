import React from 'react'
import '../../styles/style.css'
import {Navigations} from '../../'

export default {
    title: 'Example/Navigations/Sidebar',
    component: Navigations.Sidebar,
    argsTypes: {}
}

const Template = (args) => <Navigations.Sidebar {...args}>
    <Navigations.Brand>
        <Navigations.BrandImage src={'https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'}
                                appendClassname={'h-8'}
        />
    </Navigations.Brand>
</Navigations.Sidebar>

export const Sidebar = Template.bind({})
Sidebar.args = {

}
