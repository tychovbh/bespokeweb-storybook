import React from 'react'

export default function Container({children}) {
    console.log(children)
    return <div className={'storybook-navigations-breadcrumb-container'}>{children}</div>
}
