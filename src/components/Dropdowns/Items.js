import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'
import {Menu, Transition} from '@headlessui/react'

const alignClass = {
    left: 'storybook-dropdowns-items-left',
    right: 'storybook-dropdowns-items-right'
}

export default function Items({id, className, appendClassName, children, align}) {
    return <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
    >
        <Menu.Items id={id} className={Helpers.classNames(className, alignClass[align], appendClassName)}>
            <div className={'my-1'}>
                {children}
            </div>
        </Menu.Items>
    </Transition>
}

Items.propTypes = {
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

Items.defaultProps = {
    className: 'storybook-dropdowns-items',
    align: 'left'
}
