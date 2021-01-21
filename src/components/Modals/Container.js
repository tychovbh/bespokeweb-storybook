import PropTypes from "prop-types";
import React from "react";

export const Container = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-modals-container'} ${appendClassname}`}>
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

    /**
     * The title of the Container
     */
    children: PropTypes.node.isRequired
};
Container.defaultProps = {
    appendClassname: ''
};