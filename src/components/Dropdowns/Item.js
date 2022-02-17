import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'
import {Menu} from '@headlessui/react'

function Link({children, ...props}) {
    return <a {...props}>{children}</a>
}

function Button({children, ...props}) {
    return <button {...props}>{children}</button>
}

const types = {
    link: Link,
    button: Button
}

export default function Item({id, className, appendClassName, children, as}) {
    const Type = types[as]

    return <Menu.Item id={id}>
        {({active}) => (
            <Type
                className={Helpers.classNames(className, Boolean(active) ? className + '-active' : '', appendClassName)}>
                {children}
            </Type>
        )}
    </Menu.Item>
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
    className: 'storybook-dropdowns-item',
    as: 'link'
}
