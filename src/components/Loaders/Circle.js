import React from 'react'
import PropTypes from 'prop-types'

export const Circle = ({id, className, appendClassname, size, type}) => {
    return <div
        id={id}
        className={`${className} storybook-loaders-circle-${size} storybook-loaders-circle-${type} ${appendClassname}`}
    >

    </div>
}
Circle.propTypes = {
    /**
     * The id of the Circle
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
     * The type of the Circle
     */
    type: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),

    /**
     * The size of the Loader
     */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
}

Circle.defaultProps = {
    className: 'storybook-loaders-circle',
    appendClassname: '',
    type: 'default',
    size: 'md',
}
