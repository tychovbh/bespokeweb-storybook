import React from "react";
import PropTypes from "prop-types";

export const Header = ({id, className, appendClassname, children}) => {
    return <header
        id={id}
        className={`${className ?? 'storybook-dashboards-header'} ${appendClassname}`}
    >
        {children}
    </header>

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