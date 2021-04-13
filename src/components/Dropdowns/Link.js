import React from 'react'
import PropTypes from 'prop-types'

export const Link = ({to, children}) => {
    return <a href={to} className={'storybook-dropdowns-link'}>
        {children}
    </a>
}
Link.propTypes = {
    /**
     * The link where the Link needs to go to
     */
    to: PropTypes.func,

    /**
     * The HTML inside of the LinkButton
     */
    children: PropTypes.any
}
Link.defaultProps = {}
