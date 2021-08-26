import React from 'react'
import PropTypes from 'prop-types'

/**
 * Primary UI component for user interaction
 */
export const Button = ({id, className, appendClassname, children, type, onClick, disabled}) => {
    let typeClass = type ? ' storybook-buttons-button-' + type : ''

    if (appendClassname) {
        typeClass += ' ' + appendClassname
    }

    if (disabled) {
        typeClass += ' storybook-buttons-button-disabled'
    }

    return <button
        id={id}
        className={`${className}${typeClass}`}
        onClick={disabled ? null : onClick}
        disabled={disabled}
    >
        {children}
    </button>
}

Button.propTypes = {
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
    type: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'search']),

    /**
     * The onClick function of the Buttons
     */
    onClick: PropTypes.func,

    /**
     * The button is enabled/disabled
     */
    disabled: PropTypes.bool
}

Button.defaultProps = {
    className: 'storybook-buttons-button',
    appendClassname: '',
    type: 'default',
    disabled: false,
    onClick: () => {
    }
}
