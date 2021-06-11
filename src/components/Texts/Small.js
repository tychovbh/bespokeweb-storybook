import React from 'react'

export const Small = ({children, className, appendClassname}) => {
    className = className || 'storybook-texts-small'
    className += appendClassname ? ` ${appendClassname}` : ''

    return <small className={className}>{children}</small>
}
