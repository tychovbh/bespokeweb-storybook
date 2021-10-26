import React from "react";
import PropTypes from "prop-types";

export const Container = ({id, className, appendClassname, children, open = true}) => {
    className = className || `storybook-lists-container${appendClassname ? ` ${appendClassname}` : ''}`

    if (!open) {
        className += ' storybook-lists-container-closed'
    }

    return <dl id={id} className={className}>
        {children}
    </dl>
};

Container.propTypes = {
    /**
     * The id of the Breadcrumbs
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
     * The HTML inside of the Breadcrumbs
     */
    children: PropTypes.node.isRequired
};

Container.defaultProps = {
    appendClassname: ''
};
