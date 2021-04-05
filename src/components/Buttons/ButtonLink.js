import React from 'react'
import PropTypes from 'prop-types'

/**
 * Primary UI component for user interaction
 */
export const ButtonLink = ({id, className, appendClassname, children, type, href}) => {
    let typeClass = type ? 'storybook-buttons-button-' + type : ''

    return <a
        id={id}
        href={href}
        className={`${className} ${typeClass} ${appendClassname}`}
    >
        {children}
    </a>
}

ButtonLink.propTypes = {
    /**
     * The id of a Buttons
     */
    id: PropTypes.string,

    /**
     * Use a different classname
     */
    className: PropTypes.string,

    /**
     * Add more classnames
     */
    appendClassname: PropTypes.string,

    /**
     * The title of the Buttons
     */
    children: PropTypes.any,

    /**
     * the color of a Submit button
     */
    type: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),

    /**
     * The onClick function of the Buttons
     */
    onClick: PropTypes.func
}

ButtonLink.defaultProps = {
    className: 'storybook-buttons-button',
    appendClassname: '',
    type: 'default',
}
