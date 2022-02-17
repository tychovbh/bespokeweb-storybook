import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'

export default function Time({id, className, appendClassName, children, datetime}) {
    return <time dateTime={datetime} id={id} className={Helpers.classNames(className, appendClassName)}>
        {children}
    </time>
}

Time.propTypes = {
    /**
     * Add an id
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
}

Time.defaultProps = {
    className: 'storybook-calendars-events-time'
}
