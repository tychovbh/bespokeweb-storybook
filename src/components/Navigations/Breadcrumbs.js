import React from 'react'

export default function Breadcrumbs({items, divider, Component}) {
    return <nav className={'storybook-navigations-breadcrumb'}>
        <ol className={'list-reset flex text-grey-dark'}>
            {items.map((item, index) => {
                return <li key={index} className={'flex'}>
                    {
                        Component ? <Component {...item}/>
                            : <a href={item.href} className={'underline'}>{item.label}</a>
                    }
                    {
                        index + 1 !== items.length && <span className="mx-2">{divider || '>'}</span>
                    }
                </li>
            })}
        </ol>
    </nav>
}
