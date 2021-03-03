import React from 'react'
import '../../styles/style.css'
import {Navigations, Icons} from '../../'

export default {
    title: 'Example/Navigations/Sidebar',
    component: Navigations.Sidebar,
    argsTypes: {}
}

const Template = (args) => <Navigations.Sidebar {...args}>
    <Navigations.Brand>
        <Navigations.BrandImage src={'https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'}
                                appendClassname={'h-8'}/>
    </Navigations.Brand>
    <Navigations.Nav>
        <Navigations.NavLink>
            <Icons.Icon name={'home'} />
            Dashboard
        </Navigations.NavLink>
        <Navigations.Dropdown>
            <Navigations.NavLink>Team</Navigations.NavLink>
            <Navigations.NavLink>Overview</Navigations.NavLink>
        </Navigations.Dropdown>
    </Navigations.Nav>
</Navigations.Sidebar>

export const Sidebar = Template.bind({})
Sidebar.args = {}

export const Voorbeeld = () => {
    return <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">

        <div class="flex items-center flex-shrink-0 px-4">

            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                 alt="Workflow"/>

        </div>

        <div class="mt-5 flex-grow flex flex-col">

            <nav class="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">

                <div>

                    {/* Current: "bg-gray-100 text-gray-900", Default: "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}

                    <a href="#"
                       class="bg-gray-100 text-gray-900 group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md">

                        {/* Current: "text-gray-600", Default: "text-gray-400 group-hover:text-gray-500" */}

                        {/* Heroicon name: outline/home */}

                        <svg class="text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">

                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>

                        </svg>

                        Dashboard

                    </a>

                </div>


                <div class="space-y-1">

                    <button class="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">

                        {/* Heroicon name: outline/users */}

                        <svg class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">

                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>

                        </svg>

                        Team

                        {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}

                        <svg class="ml-auto h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                             viewBox="0 0 20 20" aria-hidden="true">

                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor"/>

                        </svg>

                    </button>

                    {/* Expandable link section, show/hide based on state. */}

                    <div class="space-y-1">

                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Overview

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Members

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Calendar

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Settings

                        </a>

                    </div>

                </div>


                <div class="space-y-1">

                    <button class="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">

                        {/* Heroicon name: outline/folder */}

                        <svg class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">

                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>

                        </svg>

                        Projects

                        {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}

                        <svg class="ml-auto h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                             viewBox="0 0 20 20" aria-hidden="true">

                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor"/>

                        </svg>

                    </button>

                    {/* Expandable link section, show/hide based on state. */}

                    <div class="space-y-1">

                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Overview

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Members

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Calendar

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Settings

                        </a>

                    </div>

                </div>


                <div class="space-y-1">

                    <button class="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">

                        {/* Heroicon name: outline/calendar */}

                        <svg class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">

                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>

                        </svg>

                        Calendar

                        {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}

                        <svg class="ml-auto h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                             viewBox="0 0 20 20" aria-hidden="true">

                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor"/>

                        </svg>

                    </button>

                    {/* Expandable link section, show/hide based on state. */}

                    <div class="space-y-1">

                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Overview

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Members

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Calendar

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Settings

                        </a>

                    </div>

                </div>


                <div class="space-y-1">

                    <button class="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">

                        {/* Heroicon name: outline/inbox */}

                        <svg class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">

                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>

                        </svg>

                        Documents

                        {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}

                        <svg class="ml-auto h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                             viewBox="0 0 20 20" aria-hidden="true">

                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor"/>

                        </svg>

                    </button>

                    {/* Expandable link section, show/hide based on state. */}

                    <div class="space-y-1">

                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Overview

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Members

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Calendar

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Settings

                        </a>

                    </div>

                </div>


                <div class="space-y-1">

                    <button class="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">

                        {/* Heroicon name: outline/chart-bar */}

                        <svg class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">

                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>

                        </svg>

                        Reports

                        {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}

                        <svg class="ml-auto h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                             viewBox="0 0 20 20" aria-hidden="true">

                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor"/>

                        </svg>

                    </button>

                    {/* Expandable link section, show/hide based on state. */}

                    <div class="space-y-1">

                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Overview

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Members

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Calendar

                        </a>


                        <a href="#"
                           class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">

                            Settings

                        </a>

                    </div>

                </div>

            </nav>

        </div>

    </div>
}
