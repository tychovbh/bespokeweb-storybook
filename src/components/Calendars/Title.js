import React from 'react'
import PropTypes from 'prop-types'

export default function Title({children, dateTime}) {
    return <h1 className={'storybook-calendars-title'}>
        <time dateTime={dateTime}>{children}</time>
    </h1>
}

Title.PropTypes = {
    /**
     * The HTML inside.
     */
    children: PropTypes.node.isRequired
}
