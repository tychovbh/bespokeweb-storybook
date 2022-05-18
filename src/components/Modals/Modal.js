import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Dialog, Transition} from '@headlessui/react'

export default function Modal({children, open, onClose, animate}) {
    return <Transition appear show={open} as={Fragment}>
        <Dialog as={'div'} className={'storybook-modals-modal'} onClose={onClose}>
            {
                Boolean(animate) ? <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={'storybook-modals-modal-overlay'}/>
                </Transition.Child> : <div className={'storybook-modals-modal-overlay'}/>
            }

            <div className={'fixed inset-0 flex items-center justify-center'}>
                {children}
            </div>
        </Dialog>
    </Transition>
}

Modal.propTypes = {
    /**
     * The HTML inside the Modal
     */
    children: PropTypes.node.isRequired,

    /**
     * The visibility of the Modal
     */
    open: PropTypes.bool,

    /**
     * The onClose method of the Modal
     */
    onClose: PropTypes.func,

    /**
     * Modal Type
     */
    type: PropTypes.string,
}

Modal.defaultProps = {
    className: 'storybook-modals-modal',
    open: false,
    type: 'default',
}
