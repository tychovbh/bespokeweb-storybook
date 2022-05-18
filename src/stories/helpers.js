import React from 'react'

export const CollectionButtons = () => <div className={'w-full'}>
    <button className={'storybook-buttons-button storybook-buttons-button-default'}>story button</button>
</div>

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

