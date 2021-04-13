import React from 'react'
import {Navigations} from 'bespokeweb-storybook'

export const Buttons = ({buttons, children}) => <Navigations.Topbar>
    <Navigations.Content appendClassname={'collections-buttons'}>
        {buttons && buttons()}
        {children}
    </Navigations.Content>
</Navigations.Topbar>
