import React from "react";
import PropTypes from 'prop-types';

export const Question = ({id, className, appendClassname, children}) => {
    return <p
        id={id}
        className={`${className ?? 'storybook-forms-question'} ${appendClassname}`}
    >
        {children}
    </p>
};
Question.propTypes = {
    /**
     * The id of the Question
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
     * The text inside of the Question
     */
    children: PropTypes.node.isRequired,
};
Question.defaultProps = {
    appendClassname: ''
};