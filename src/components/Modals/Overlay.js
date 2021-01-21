import React from "react";
import PropTypes from 'prop-types';

export const Overlay = ({id, className, appendClassname, children, open}) => {
    const showClass = open ? 'storybook-modals-visible' : '';

    return <div
        id={id}
        className={`${className ?? 'storybook-modals-overlay'} ${showClass} ${appendClassname}`}
    >
        {children}
    </div>
};
Overlay.propTypes = {
    /**
     * The id of the Overlay
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
     * The title of the Overlay
     */
    children: PropTypes.node.isRequired,

    /**
     * The visibility of the Modal
     */
    open: PropTypes.bool,
};
Overlay.defaultProps = {
    appendClassname: '',
    open: false
};