import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'

export default function Date({id, className, appendClassName, children, date, active}) {
    if (active) {
        className += '-active'
    }

    return <time id={id} className={Helpers.classNames(className, appendClassName)} dateTime={date}>
        {children}
    </time>
}

Date.propTypes = {
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

Date.defaultProps = {
    className: 'storybook-calendars-cells-date',
    active: false
}
