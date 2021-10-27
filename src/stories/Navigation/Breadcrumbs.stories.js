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

export const WithCustomComponent = Template.bind({});
WithCustomComponent.args = {
    Component: (item) => {
        console.log(item)
        return <a className={'text-blue-600'}>{item.label}</a>
    },
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

export const WithCustomDivider = Template.bind({});
WithCustomDivider.args = {
    divider: '/',
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
