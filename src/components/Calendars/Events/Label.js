import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'

export default function Label({id, className, appendClassName, children}) {
    return <p id={id} className={Helpers.classNames(className, appendClassName)}>
        {children}
    </p>
}

Label.propTypes = {
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

Label.defaultProps = {
    className: 'storybook-calendars-events-label'
}
