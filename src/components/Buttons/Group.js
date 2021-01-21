import PropTypes from 'prop-types'
import React from 'react'

export const Group = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-button-group'} ${appendClassname}`}
    >
        {children}
    </div>
};

Group.propTypes = {
    /**
     * The id of a Buttons
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
     * The title of the Buttons
     */
    children: PropTypes.string,
};

Group.defaultProps = {
    appendClassname: '',
};
