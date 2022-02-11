import React from 'react'

export default function Link({to, children, target}) {
    return <a href={to} target={target} className={'storybook-texts-link'}>{children}</a>
}
