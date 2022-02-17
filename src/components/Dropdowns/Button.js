import React from 'react'
import PropTypes from 'prop-types'
import {Menu} from '@headlessui/react'

export default function Button({children}) {
    return <Menu.Button type={'button'} className={'storybook-dropdowns-button'}>
        {children}
    </Menu.Button>
}

Button.propTypes = {}
