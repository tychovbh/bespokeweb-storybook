import React from 'react'
import PropTypes from 'prop-types'

export const Select = ({id, className, appendClassname, children, name, value, onChange}) => {
    return <select id={id} name={name}
                   className={`${className} ${appendClassname}`}
                   defaultValue={value}
                   onChange={onChange}
    >
        {children}
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
     * The HTMl inside of the Select
     */
    children: PropTypes.any,

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