import PropTypes from "prop-types";
import React from "react";

export const Footer = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-modals-footer'} ${appendClassname}`}
    >
        {children}
    </div>
};
Footer.propTypes = {
    /**
     * The id of the Modal
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
    children: PropTypes.node.isRequired,
};
Footer.defaultProps = {
    appendClassname: '',
    type: 'default'
};