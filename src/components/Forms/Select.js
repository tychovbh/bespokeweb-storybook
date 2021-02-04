import React from 'react'
import PropTypes from 'prop-types'

export const Select = ({id, className, appendClassname, name, options, value, placeholder, onChange}) => {
    return <select id={id} name={name}
                   className={`${className} ${appendClassname}`}
                   defaultValue={value}
                   placeholder={placeholder}
                   onChange={onChange}
    >
        <option disabled selected>{placeholder}</option>
        {
            options &&
            options.map((option, index) => {
                return <option key={index}
                               value={option.value}
                >
                    {option.label}
                </option>
            })
        }
    </select>
}

Select.propTypes = {
    /**
     * The id of the Select
     */
    id: PropTypes.string,

    /**
     * Use a different className
     */
    className: PropTypes.string,

    /**
     * Add more classNames
     */
    appendClassname: PropTypes.string,

    /**
     * The name of the Select
     */
    name: PropTypes.string,

    /**
     * The options of the Select
     */
    options: PropTypes.array,
}

Select.defaultProps = {
    className: 'storybook-forms-input storybook-forms-select',
    appendClassname: ''
}