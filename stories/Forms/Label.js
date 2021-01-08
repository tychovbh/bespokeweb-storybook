import React from 'react'
import '../shared/style.css'
import './Label.css'
import PropTypes from 'prop-types';


export const Label = ({id, htmlFor, className, appendClassname, children}) => {
    return <label id={id} htmlFor={htmlFor} className={`${className ?? 'storybook-forms-label'} ${appendClassname}`}>
        {children}
    </label>
};

Label.propTypes = {
    /**
     * The id of a Label
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
     * Change the text of a Label
     */
    children: PropTypes.node.isRequired
};

Label.defaultProps = {};