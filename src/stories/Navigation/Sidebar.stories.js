import React, {useState} from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Navigations, Icons, Layouts, Logos} from 'bespokeweb-storybook'

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
                <Logos.Logo name={'managedat'} href={'/'}/>
            </Navigations.Brand>
            <Navigations.Nav>
                <Navigations.NavLink>
                    <Icons.Icon name={'Home'}/>
                    Dashboard
                </Navigations.NavLink>

                <Navigations.NavLink onClick={() => handleOpen('team')}>
                    <Icons.Icon name={'Users'}/>
                    Team
                    <Icons.Icon
                        name={open === 'team' ? 'ChevronDown' : 'ChevronRight'}
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
                    <Icons.Icon name={'Folder'}/>
                    Projects
                    <Icons.Icon
                        name={open === 'projects' ? 'ChevronDown' : 'ChevronRight'}
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
                    <Icons.Icon name={'Calendar'}/>
                    Calendar
                    <Icons.Icon
                        name={open === 'calendar' ? 'ChevronDown' : 'ChevronRight'}
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
                    <Icons.Icon name={'Inbox'}/>
                    Documents
                    <Icons.Icon
                        name={open === 'documents' ? 'ChevronDown' : 'ChevronRight'}
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
                    <Icons.Icon name={'ChartBar'}/>
                    Reports
                    <Icons.Icon
                        name={open === 'reports' ? 'ChevronDown' : 'ChevronRight'}
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
