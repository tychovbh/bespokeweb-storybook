import React from 'react';
import PropTypes from 'prop-types';
import {Icons} from '../../'

/**
 * Primary UI component for user interaction
 */
export const Button = ({id, className, appendClassname, children, type, onClick, disabled}) => {
    let typeClass = type ? 'storybook-buttons-button-' + type : '';

    return <button
        id={id}
        className={`${className} ${typeClass} ${appendClassname}`}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>;
};

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
    type: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),

    /**
     * The onClick function of the Buttons
     */
    onClick: PropTypes.func
};

Button.defaultProps = {
    className: 'storybook-buttons-button',
    appendClassname: '',
    type: 'default',
    onClick: () => {
    }
};
