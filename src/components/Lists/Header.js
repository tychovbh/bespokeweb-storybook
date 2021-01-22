import React from "react";
import PropTypes from "prop-types";

export const Header = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-lists-header'} ${appendClassname}`}
    >
        {children}
    </div>
};

Header.propTypes = {
    /**
     * The id of the Header
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
     * The HTML inside of the Header
     */
    children: PropTypes.node.isRequired
};

Header.defaultProps = {
    appendClassname: ''
};