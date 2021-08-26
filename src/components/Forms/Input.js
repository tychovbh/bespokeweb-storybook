import React from 'react';
import PropTypes from 'prop-types';

/**
 * Form Input component
 */
export const Input = ({id, className, appendClassname, name, type, placeholder, value, onChange}) => {
    return <input
        id={id}
        type={type}
        className={`${className ?? 'storybook-forms-input'} ${appendClassname}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={event => onChange(event.target.value)}
    />
};

Input.propTypes = {
    /**
     * The id of an Input
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
     * The name of an Input
     */
    name: PropTypes.string,

    /**
     * The type of an Input (e.g. Texts, Password, Radio, Checkbox)
     */
    type: PropTypes.oneOf(['text', 'password', 'hidden', 'number', 'date']),

    /**
     * The placeholder of an Input
     */
    placeholder: PropTypes.string,

    /**
     * The value of an Input
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * The onChange method of an Input
     */
    onChange: PropTypes.func
};

Input.defaultProps = {
    appendClassname: '',
    type: 'text'
};
