import React from 'react'
import {Icons, Texts, Buttons} from 'bespokeweb-storybook'

const logos = {
    managedat: ({href}) => <Buttons.ButtonLink href={href}>
        <Icons.Icon name={'Database'} className={'mr-2 w-6 text-green-400'}/>
        <Texts.Heading type={'h2'}>
            Manage
            <span className={'text-green-400'}>Dat</span>
        </Texts.Heading>
    </Buttons.ButtonLink>,
}

export const Logo = ({name, href}) => {
    const Component = logos[name]

    return <Component href={href}/>
}
