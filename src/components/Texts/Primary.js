import React from "react";
import PropTypes from "prop-types";

export const Primary = ({id, className, appendClassname, children}) => {
    return <p
        id={id}
        className={`${className ?? 'storybook-texts-primary'} ${appendClassname}`}
    >
        {children}
    </p>
};
Primary.propTypes = {
    /**
     * The id of the Heading
     */
    id: PropTypes.string,

    /**
     * Use a diferent className
     */
    className: PropTypes.string,

    /**
     * Add more classnames
     */
    appendClassname: PropTypes.string,

    /**
     * The text of the Heading
     */
    children: PropTypes.node.isRequired,
};
Primary.defaultProps = {
    appendClassname: ''
};