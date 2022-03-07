import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'

export default function Item({id, className, appendClassName, children}) {
    return <div id={id} className={Helpers.classNames(className, appendClassName)}>
        {children}
    </div>
}

Item.propTypes = {
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

Item.defaultProps = {
    className: 'storybook-lists-stacked-item'
}
