import React from 'react';
import PropTypes from "prop-types";

export const Alert = ({id, className, appendClassname, children, type}) => {
    const typeClass = type ? 'storybook-feedbacks-alert-' + type : '';

    return <div
        id={id}
        className={`${className ?? 'storybook-feedbacks-alert'} ${typeClass} ${appendClassname}`}
    >
        {children}
    </div>
};
Alert.propTypes = {
    /**
     * The id of the Alert
     */
    id: PropTypes.string,

    /**
     * Use a different className
     */
    className: PropTypes.string,

    /**
     * Add more classnames
     */
    appendClassname: PropTypes.string,

    /**
     * The text of the Alert
     */
    children: PropTypes.node.isRequired,

    /**
     * The type of Alert
     */
    type: PropTypes.oneOf(['default', 'information', 'success', 'warning', 'danger'])
};
Alert.defaultProps = {
    appendClassname: '',
    type: 'default'
};