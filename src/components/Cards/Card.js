import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'

export default function Card({id, className, appendClassName, children}) {
    return <div id={id} className={Helpers.classNames(className, appendClassName)}>
        {children}
    </div>
}

Card.propTypes = {
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

Card.defaultProps = {
    className: 'storybook-cards-card'
}
