import React from "react";
import PropTypes from "prop-types";

export const Content = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-navigation-content'} ${appendClassname}`}
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