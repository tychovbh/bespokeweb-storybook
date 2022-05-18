import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'
import {Dialog, Transition} from '@headlessui/react'

export default function Panel({children, className, appendClassname, animate}) {
    if (animate) {
        return <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <Dialog.Panel className={Helpers.classNames(className, appendClassname)}>
                {children}
            </Dialog.Panel>
        </Transition.Child>
    }

    return <Dialog.Panel className={Helpers.classNames(className, appendClassname)}>
        {children}
    </Dialog.Panel>
}

Panel.propTypes = {
    /**
     * Use a different classname
     */
    className: PropTypes.string,

    /**
     * Add more classnames
     */
    appendClassname: PropTypes.string,

    /**
     * The HTML inside the Panel
     */
    children: PropTypes.node.isRequired
}

Panel.defaultProps = {
    className: 'storybook-modals-panel',
}
