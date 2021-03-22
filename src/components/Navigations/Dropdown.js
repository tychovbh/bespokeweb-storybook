import React from 'react'
import PropTypes from 'prop-types'

export const Dropdown = ({id, className, appendClassname, children}) => {
    return <div id={id}
        className={`${className} ${appendClassname}`}
    >
        {children}
    </div>
}

Dropdown.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    appendClassname: PropTypes.string,
    children: PropTypes.any
}

Dropdown.defaultProps = {
    className: 'storybook-navigations-dropdown',
    appendClassname: ''
}