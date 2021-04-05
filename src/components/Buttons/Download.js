import PropTypes from 'prop-types'
import React from 'react'


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
}

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
}

Download.defaultProps = {
    appendClassname: '',
    type: 'default',
    onClick: () => {
    }
}
