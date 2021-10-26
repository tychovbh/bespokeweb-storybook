import PropTypes from "prop-types";
import React from "react";

export const Body = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-modals-body'} ${appendClassname}`}
    >
        {children}
    </div>
};
Body.propTypes = {
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
     * The title of the Breadcrumbs
     */
    children: PropTypes.node.isRequired
};
Body.defaultProps = {
    appendClassname: ''
};
