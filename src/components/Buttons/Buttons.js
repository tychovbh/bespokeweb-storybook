import React from 'react';
import PropTypes from 'prop-types';
import * as Texts from "../Texts/Texts";

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
    children: PropTypes.string,

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
    appendClassname: '',
    type: 'default',
    onClick: () => {
    }
};

export const Group = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-button-group'} ${appendClassname}`}
    >
        {children}
    </div>
};
Group.propTypes = {
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
    children: PropTypes.string,
};
Group.defaultProps = {
    appendClassname: '',
};

/**
 * Primary UI component for user interaction
 */
export const Download = ({id, className, appendClassname, children, onClick}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-button-download'} ${appendClassname}`}
    >
        <div className={'storybook-button-download-content'}>
            {children}
        </div>
        <button
            className={'storybook-button-download-content-button'}
            onClick={onClick}
        >
            Download
        </button>
    </div>
};

Download.propTypes = {
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
    children: PropTypes.string,

    /**
     * the color of a Submit button
     */
    type: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),

    /**
     * The onClick function of the Buttons
     */
    onClick: PropTypes.func
};

Download.defaultProps = {
    appendClassname: '',
    type: 'default',
    onClick: () => {
    }
};
