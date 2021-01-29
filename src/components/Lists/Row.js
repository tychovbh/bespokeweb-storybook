import React from "react";
import PropTypes from "prop-types";

export const Row = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-lists-row'} ${appendClassname}`}
    >
        {children}
    </div>
};

Row.propTypes = {
    /**
     * The id of the Row
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
     * The HTML inside of the Row
     */
    children: PropTypes.node.isRequired
};

Row.defaultProps = {
    appendClassname: ''
};