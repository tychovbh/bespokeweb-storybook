import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'

export default function List({id, className, appendClassName, children}) {
    return <ol id={id} className={Helpers.classNames(className, appendClassName)}>
        {children}
    </ol>
}

List.propTypes = {
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

List.defaultProps = {
    className: 'storybook-calendars-events-list',
}
