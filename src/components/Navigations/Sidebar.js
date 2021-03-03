import React from 'react'
import PropTypes from 'prop-types'
import {navigations} from '../../'

export const Sidebar = ({id, className, appendClassname, children}) => {
    return <div id={id} className={`${className} ${appendClassname}`}>
        {children}
    </div>
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