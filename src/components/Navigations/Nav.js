import React from "react";
import PropTypes from "prop-types";

export const Nav = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-navigation-nav'} ${appendClassname}`}
    >
        {children}
    </div>
};

Nav.propTypes = {
    /**
     * The id of the Nav
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
     * The HTML inside of the NavLink
     */
    children: PropTypes.node.isRequired
};

Nav.defaultProps = {
    appendClassname: ''
};