import React from 'react'
import PropTypes from 'prop-types'

export const Dropdown = ({children, open, align, onClose, className, appendClassname}) => {
    className = className || 'storybook-dropdowns-dropdown'
    className += ` storybook-dropdowns-dropdown-${open ? 'open' : 'close'}`
    className += ` storybook-dropdowns-dropdown-${align}`

    if (appendClassname) {
        className += ` ${appendClassname}`
    }

    return <>
        <div className={className}>{children}</div>
        {
            open && <div className={'storybook-dropdowns-overlay'} onClick={onClose}/>
        }
    </>
}
Dropdown.propTypes = {
    children: PropTypes.any,
    open: PropTypes.bool.isRequired,
    align: PropTypes.string
}
Dropdown.defaultProps = {
    align: 'left',
    appendClassname: ''
}
