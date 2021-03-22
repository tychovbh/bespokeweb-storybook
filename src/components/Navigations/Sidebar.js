import React from 'react'
import PropTypes from 'prop-types'
import {navigations, Buttons, Icons} from '../../'

export const Sidebar = ({id, className, appendClassname, children, open}) => {
    if (open) {
        return <div id={id} className={`${className} ${appendClassname}`}>

            {children}
        </div>
    }

    return null
}

Sidebar.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    appendClassname: PropTypes.string,
}
Sidebar.defaultProps = {
    className: 'storybook-navigations-sidebar',
    appendClassname: ''
}