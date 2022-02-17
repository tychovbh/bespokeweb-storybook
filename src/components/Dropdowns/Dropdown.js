import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'
import {Menu} from '@headlessui/react'

export default function Dropdown({id, className, appendClassName, children}) {
    return <Menu as={'div'} id={id} className={Helpers.classNames(className, appendClassName)}>
        {children}
    </Menu>
}

Dropdown.propTypes = {
    /**
     * Add an id
     */
    id: PropTypes.string,

    /**
     * Use a different className
     */
    className: PropTypes.string,

    /**
     * Add more classNames
     */
    appendClassname: PropTypes.string,
}

Dropdown.defaultProps = {
    className: 'storybook-dropdowns-dropdown'
}
