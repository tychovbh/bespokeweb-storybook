import React from "react";
import PropTypes from "prop-types";

export const Topbar = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className} ${appendClassname}`}
    >
        {children}
    </div>
};

Topbar.propTypes = {
    /**
     * The id of the Container
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
};

Topbar.defaultProps = {
    className: 'storybook-navigation-container',
    appendClassname: ''
};