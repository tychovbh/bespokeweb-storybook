import React from "react";
import PropTypes from "prop-types";

export const Container = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-navigation-container'} ${appendClassname}`}
    >
        {children}
    </div>
};

Container.propTypes = {
    /**
     * The id of the Container
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

Container.defaultProps = {
    appendClassname: ''
};