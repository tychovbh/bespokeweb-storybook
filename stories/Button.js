import React from 'react';
import './shared/style.css';
import './Button.css';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({id, className, appendClassname, children, type, onClick}) => {
    const typeClass = type ? 'storybook-button-' + type : '';
    return <button
        id={id}
        className={`${className ?? 'storybook-button'} ${typeClass} ${appendClassname}`}
        onClick={onClick}
    >
        {children}
    </button>;
};

Button.propTypes = {
    /**
     * The id of a Button
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
     * The title of the Button
     */
    children: PropTypes.string,

    /**
     * the color of a Submit button
     */
    type: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),

    /**
     * The onClick function of the Button
     */
    onClick: PropTypes.func
};

Button.defaultProps = {
    appendClassname: '',
    type: 'default',
    onClick: () => {}
};
