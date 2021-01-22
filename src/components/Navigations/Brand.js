import React from "react";
import PropTypes from "prop-types";

export const Brand = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-navigation-brand'} ${appendClassname}`}
    >
        {children}
    </div>
};

Brand.propTypes = {
    /**
     * The id of the Brand
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
     * The HTML inside of Brand
     */
    children: PropTypes.node.isRequired,
};

Brand.defaultProps = {
    appendClassname: ''
};