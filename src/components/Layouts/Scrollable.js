import React, {useEffect, useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {Icons, Buttons} from 'bespokeweb-storybook'

export const Scrollable = ({children, childrenRef}) => {
    const [scrolling, setScrolling] = useState(0)
    const containerRef = useRef(null)

    const scroll = (direction) => {
        const rect = childrenRef.current.getBoundingClientRect()
        const rect_container = containerRef.current.getBoundingClientRect()
        const offset = rect_container.width

        let amount = scrolling
        if (direction === 'left') {
            amount -= offset
        }

        if (direction === 'right') {
            amount += offset
        }

        if (amount <= rect.width && amount >= 0) {
            setScrolling(amount)
            containerRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
                left: amount
            })
        }
    }

    useEffect(() => {

    }, [])

    return <div className={'storybook-layouts-container'}>
        <div className={'storybook-layouts-scroll storybook-layouts-scroll-left'}>
            <Buttons.Button onClick={() => scroll('left')}>
                <Icons.Icon name={'chevron-left'} className={'w-8'}/>
            </Buttons.Button>
        </div>

        <div className={'storybook-layouts-content'} ref={containerRef}>
            {children}
        </div>

        <div className={'storybook-layouts-scroll storybook-layouts-scroll-right'}>
            <Buttons.Button onClick={() => scroll('right')}>
                <Icons.Icon name={'chevron-right'} className={'w-8'}/>
            </Buttons.Button>
        </div>
    </div>
}

Scrollable.propTypes = {
    /**
     * The children component Ref
     */
    childrenRef: PropTypes.any,

    /**
     * The html inside of the Table
     */
    children: PropTypes.any,
}

Scrollable.defaultprops = {
}
