import React, {useState} from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Navigations, Icons, Layouts} from 'bespokeweb-storybook'

export default {
    title: 'Example/Navigations/Sidebar',
    component: Navigations.Sidebar,
    argsTypes: {}
}

const Template = (args) => {
    const [open, setOpen] = useState('')

    const handleOpen = (item) => {
        setOpen(open === item ? '' : item)
    }

    return <div>
        <Navigations.Sidebar {...args}>
            <Navigations.Brand>
                <Navigations.BrandImage
                    src={'https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'}
                    appendClassname={'h-8'}/>
            </Navigations.Brand>
            <Navigations.Nav>
                {/* Home */}
                <Navigations.NavLink>
                    <Icons.Icon name={'home'}/>
                    Dashboard
                </Navigations.NavLink>

                <Navigations.NavLink onClick={() => handleOpen('team')}>
                    <Icons.Icon name={'users'}/>
                    Team
                    <Icons.Icon
                        name={open === 'team' ? 'chevron-down' : 'chevron-right'}
                        className={'storybook-navigations-dropdown-icon'}
                    />
                </Navigations.NavLink>
                <Navigations.Dropdown appendClassname={open === 'team' ? '' : 'hidden'}>
                    <Navigations.NavLink>Overview</Navigations.NavLink>
                    <Navigations.NavLink>Members</Navigations.NavLink>
                    <Navigations.NavLink>Calendar</Navigations.NavLink>
                    <Navigations.NavLink>Settings</Navigations.NavLink>
                </Navigations.Dropdown>

                <Navigations.NavLink onClick={() => handleOpen('projects')}>
                    <Icons.Icon name={'folder'}/>
                    Projects
                    <Icons.Icon
                        name={open === 'projects' ? 'chevron-down' : 'chevron-right'}
                        className={'storybook-navigations-dropdown-icon'}
                    />
                </Navigations.NavLink>
                <Navigations.Dropdown appendClassname={open === 'projects' ? '' : 'hidden'}>
                    <Navigations.NavLink>Overview</Navigations.NavLink>
                    <Navigations.NavLink>Members</Navigations.NavLink>
                    <Navigations.NavLink>Calendar</Navigations.NavLink>
                    <Navigations.NavLink>Settings</Navigations.NavLink>
                </Navigations.Dropdown>

                <Navigations.NavLink onClick={() => handleOpen('calendar')}>
                    <Icons.Icon name={'calendar'}/>
                    Calendar
                    <Icons.Icon
                        name={open === 'calendar' ? 'chevron-down' : 'chevron-right'}
                        className={'storybook-navigations-dropdown-icon'}
                    />
                </Navigations.NavLink>
                <Navigations.Dropdown appendClassname={open === 'calendar' ? '' : 'hidden'}>
                    <Navigations.NavLink>Overview</Navigations.NavLink>
                    <Navigations.NavLink>Members</Navigations.NavLink>
                    <Navigations.NavLink>Calendar</Navigations.NavLink>
                    <Navigations.NavLink>Settings</Navigations.NavLink>
                </Navigations.Dropdown>

                <Navigations.NavLink onClick={() => handleOpen('documents')}>
                    <Icons.Icon name={'inbox'}/>
                    Documents
                    <Icons.Icon
                        name={open === 'documents' ? 'chevron-down' : 'chevron-right'}
                        className={'storybook-navigations-dropdown-icon'}
                    />
                </Navigations.NavLink>
                <Navigations.Dropdown appendClassname={open === 'documents' ? '' : 'hidden'}>
                    <Navigations.NavLink>Overview</Navigations.NavLink>
                    <Navigations.NavLink>Members</Navigations.NavLink>
                    <Navigations.NavLink>Calendar</Navigations.NavLink>
                    <Navigations.NavLink>Settings</Navigations.NavLink>
                </Navigations.Dropdown>

                <Navigations.NavLink onClick={() => handleOpen('reports')}>
                    <Icons.Icon name={'chart-bar'}/>
                    Reports
                    <Icons.Icon
                        name={open === 'reports' ? 'chevron-down' : 'chevron-right'}
                        className={'storybook-navigations-dropdown-icon'}
                    />
                </Navigations.NavLink>
                <Navigations.Dropdown appendClassname={open === 'reports' ? '' : 'hidden'}>
                    <Navigations.NavLink>Overview</Navigations.NavLink>
                    <Navigations.NavLink>Members</Navigations.NavLink>
                    <Navigations.NavLink>Calendar</Navigations.NavLink>
                    <Navigations.NavLink>Settings</Navigations.NavLink>
                </Navigations.Dropdown>
            </Navigations.Nav>
        </Navigations.Sidebar>
        <Layouts.Container type={'sidebar'}>
            <Layouts.Container>
                <h1>Content</h1>
            </Layouts.Container>
        </Layouts.Container>
    </div>
}

export const Sidebar = Template.bind({})
Sidebar.args = {}
