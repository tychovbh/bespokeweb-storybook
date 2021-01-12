import React from 'react'
import '../shared/style.css'
import './Checkbox.css'
import PropsTypes from 'prop-types';

export const Checkbox = ({id, className, appendClassname}) => {
    return <input
        id={''}
        type="checkbox"
    />
};

Checkbox.propTypes = {
    /**
     * The id of a Checkbox
     */
    id: PropsTypes.string,

    /**
     * Use a different className
     */
    className: PropsTypes.string,

    /**
     * Add more classnames
     */
    appendClassname: PropsTypes.string
};

Checkbox.defaultProp = {
   appendClassname: ''
};