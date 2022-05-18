import React from 'react'
import {Dialog} from '@headlessui/react'

export default function Title({children}) {
    return <Dialog.Title as={'h3'} className={'text-lg font-medium leading-6 text-gray-900'}>
        {children}
    </Dialog.Title>
}