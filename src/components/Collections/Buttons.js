import React from 'react'
import {FormSubmit} from 'react-form-foundry'
import {Navigations, Texts, Buttons as ButtonsComponents} from 'bespokeweb-storybook'

export const Buttons = ({buttons, components}) => <Navigations.Topbar>
    <Navigations.Content appendClassname={'collections-buttons'}>
        {buttons && buttons()}
        <ButtonsComponents.Button appendClassname={'mr-4'}>All Databases</ButtonsComponents.Button>
        <FormSubmit components={components}/>
    </Navigations.Content>
</Navigations.Topbar>
