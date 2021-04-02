import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {Buttons, Icons} from '../../'

export const SidebarNav = ({id, className, appendClassname, navRef, children, state, setState}) => {

    return <div ref={navRef}
                className={`storybook-navigations-sidebar${state ? ` storybook-navigations-sidebar-${state}` : ''}`}>
        <div className={'storybook-navigations-sidebar-x'}>
            <Buttons.Button onClick={() => setState(state !== 'open' ? 'open' : 'close')}>
                <Icons.Icon name={'x'} className={'w-6'}/>
            </Buttons.Button>
        </div>
        {children}
    </div>
}

export const Sidebar = ({children}) => {
    const [state, setState] = useState('')
    const nav = useRef(null)

    const checkVisible = () => {
        const box = nav.current.getBoundingClientRect();
        const visible = !!(box.width && box.height);
        setState(visible ? 'open' : 'close')
    }

    useEffect(() => {
        checkVisible()
    }, [])

    return <>
        <Buttons.Button onClick={() => setState(state !== 'open' ? 'open' : 'close')}>
            <Icons.Icon name={'menu-alt-2'} className={'w-8'}/>
        </Buttons.Button>

        {
            <SidebarNav setState={setState} navRef={nav} state={state}>{children}</SidebarNav>
        }
    </>
}

Sidebar.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    appendClassname: PropTypes.string,
}
Sidebar.defaultProps = {
    className: 'storybook-navigations-sidebar',
    appendClassname: ''
}
