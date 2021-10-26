import React from 'react'

export default function Breadcrumbs({items, divider}) {
    return <nav className={'storybook-navigations-breadcrumb'}>
        <ol className={'list-reset flex text-grey-dark'}>
            {items.map((item, index) => {
                return <>
                    <li>
                        <a href={item.href} className={'underline'}>{item.label}</a>
                    </li>
                    {
                        index + 1 !== items.length && <li><span className="mx-2">{divider || '>'}</span></li>
                    }
                </>
            })}
        </ol>
    </nav>
}
