import React from 'react'
import PropsTypes from 'prop-types';

export const Checkbox = ({id, className, appendClassname, name, value, onClick}) => {
    return <input
        id={id}
        className={`${className ?? 'storybook-forms-checkbox'} ${appendClassname}`}
        type="checkbox"
        name={name}
        value={value}
        onClick={onClick}
    />
};

Checkbox.propTypes = {
    /**
     * The id of the Checkbox
     */
    id: PropsTypes.string,

    /**
     * Use a different className
     */
    className: PropsTypes.string,

    /**
     * Add more classnames
     */
    appendClassname: PropsTypes.string,

    /**
     * The nane of the checkbox
     */
    name: PropsTypes.string,

    /**
     * The value of the Checkbox
     */
    value: PropsTypes.string,

    /**
     * The onClick method of the Checkbox
     */
    onClick: PropsTypes.func
};

Checkbox.defaultProp = {
    appendClassname: '',
    onClick: () => {}
};