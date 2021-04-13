import React from 'react'
import {Texts} from 'bespokeweb-storybook'

export const Title = ({children}) => <div className={'collections-title'}>
    <Texts.Heading
        type={'h1'}
        appendClassname={'mt-16 mb-4 text-center'}>{children}</Texts.Heading>
    <hr className={'mb-16'}/>
</div>
