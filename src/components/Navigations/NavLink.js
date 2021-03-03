import React from "react";
import PropTypes from "prop-types";

export const NavLink = ({id, className, appendClassname, children, link, active}) => {
    const activeClass = active ? 'storybook-navigations-nav-link-active' : '';
    return <a
        id={id}
        className={`${className} ${activeClass} ${appendClassname}`}
        href={link}
    >
        {children}
    </a>
};

NavLink.propTypes = {
    /**
     * The id of the NavLink
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
     * The HTML inside of the NavLink
     */
    children: PropTypes.node.isRequired,

    /**
     * The link of the NavLink
     */
    link: PropTypes.string,

    /**
     * Is the NavLink active?
     */
    active: PropTypes.bool

};

NavLink.defaultProps = {
    className: 'storybook-navigations-nav-link',
    appendClassname: ''
};