import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'

export default function Date({id, className, appendClassName, children, date, isToday, active}) {
    let classNames = className;

    if (active) {
        classNames += ` ${className}-active`
    }

    if (isToday) {
        classNames += ` ${className}-today`
    }

    return <time id={id} className={Helpers.classNames(classNames, appendClassName)} dateTime={date}>
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
    isToday: false,
    active: false
}
