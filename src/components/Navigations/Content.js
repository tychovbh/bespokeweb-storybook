import React from "react";
import PropTypes from "prop-types";

export const Content = ({id, className, appendClassname, children}) => {
    className = className || 'storybook-navigation-content'
    if (appendClassname) {
        className += ` ${appendClassname}`
    }
    return <div
        id={id}
        className={className}
    >
        {children}
    </div>
};

Content.propTypes = {
    /**
     * The id of the Content
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
     * The HTML inside of Content
     */
    children: PropTypes.node.isRequired
};

Content.defaultProps = {
    appendClassname: ''
};
