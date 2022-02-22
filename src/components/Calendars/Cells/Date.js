import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'

export default function Date({id, className, appendClassName, children, dateTime, isSelected, isToday}) {
    let classNames = className

    if (isToday) {
        classNames += ` ${className}-today`
    }

    if (isSelected) {
        classNames += ` ${className}-selected`
    }

    return <time id={id} className={Helpers.classNames(classNames, appendClassName)} dateTime={dateTime}>
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
