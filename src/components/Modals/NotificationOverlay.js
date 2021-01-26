import React from "react";
import PropTypes from 'prop-types'

export const NotificationOverlay = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-modals-notification-overlay'} ${appendClassname}`}
    >
        {children}
    </div>
};

NotificationOverlay.propTypes = {
    /**
     * The id of the NotificationOverlay
     */
    id: PropTypes.string,

    /**
     * Use a different className
     */
    className: PropTypes.string,

    /**
     * Add more classNames
     */
    appendClassname: PropTypes.string,

    /**
     * The HTML inside of the NotificationOverlay
     */
    children: PropTypes.node.isRequired
}
