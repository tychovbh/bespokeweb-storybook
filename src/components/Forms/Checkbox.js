import React from 'react'
import PropsTypes from 'prop-types';

export const Checkbox = ({id, className, appendClassname, name, value, onClick, label}) => {
    className = className || 'storybook-forms-checkbox'
    className += ` ${appendClassname}`

    return <div className={`${className}`}>
        <input id={id} name={name} type={'checkbox'} value={value} onClick={onClick}/>
        {label && <label htmlFor={id}>{label}</label>}
    </div>
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
    onClick: () => {
    }
};
