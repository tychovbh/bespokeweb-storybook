import React from 'react'
import PropTypes from 'prop-types'

export default function Header({children}) {
    return <div className={'storybook-calendars-header'}>
        {children}
    </div>
}

Header.PropTypes = {
    /**
     * The HTML inside.
     */
    children: PropTypes.node.isRequired
}
