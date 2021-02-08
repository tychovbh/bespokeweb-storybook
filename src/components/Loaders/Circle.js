import React from 'react'
import PropTypes from 'prop-types'

export const Circle = ({id, className, appendClassname, color, size, border}) => {
    return <div
        id={id}
        className={`${className} ${appendClassname}`}
        style={{
            width: size + 'px',
            height: size + 'px',
            borderWidth: 20 / 4,
            borderTop: border
        }}
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
     * The color of the Loader
     */
    color: PropTypes.string,

    /**
     * The size of the Loader
     */
    size: PropTypes.number
}

Circle.defaultProps = {
    className: 'storybook-loaders-circle',
    appendClassname: '',
    size: 20
}
