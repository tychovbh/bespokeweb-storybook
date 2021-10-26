import React from "react";
import PropTypes from "prop-types";
import {Layouts} from 'bespokeweb-storybook'

export const Topbar = ({id, className, appendClassname, children}) => {
    className = className || 'storybook-navigations-topbar'
    if (appendClassname) {
        className += ` ${appendClassname}`
    }
    return <div
        id={id}
        className={className}
    >
        <Layouts.Container>

        {children}
        </Layouts.Container>
    </div>
};

Topbar.propTypes = {
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
};

Topbar.defaultProps = {
    className: 'storybook-navigation-container',
    appendClassname: ''
};
