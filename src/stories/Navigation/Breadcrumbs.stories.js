import React from 'react'
import {Navigations} from 'bespokeweb-storybook'

export default {
    title: 'Example/Navigations/Breadcrumbs',
    component: Navigations.Breadcrumbs,
    args: {}
}

function Template(args) {
    return <Navigations.Breadcrumbs {...args}/>
}

export const Default = Template.bind({});
Default.args = {
    items: [
        {
            label: 'Dashboard',
            href: '#'
        },
        {
            label: 'Agencies',
            href: '#'
        },
    ]
}
