import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'

/**
 * Primary UI component for user interaction
 */
export const Button = ({id, className, appendClassName, children, type, onClick, disabled}) => {
    let classNames = className

    if (type) {
        classNames += ' storybook-buttons-button-' + type
    }

    if (disabled) {
        classNames += ' storybook-buttons-button-disabled'
    }

    return <button
        id={id}
        className={Helpers.classNames(classNames, appendClassName)}
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
     * Add more classNames
     */
    appendClassName: PropTypes.string,

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
    appendClassName: '',
    type: 'default',
    disabled: false,
    onClick: () => {
    }
}
