import React from 'react'
import PropTypes from 'prop-types'

export default function Container({children}) {
    return <div className={'storybook-calendars-container'}>
        {children}
    </div>
}

Container.PropTypes = {
    /**
     * The HTML inside.
     */
    children: PropTypes.node.isRequired
}
