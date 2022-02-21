import React from 'react'
import PropTypes from 'prop-types'
import {Buttons, Icons} from 'bespokeweb-storybook'

export default function DateSelect({}) {
    return <Buttons.Group>
        <Buttons.Button
            className={'storybook-calendars-date-select-previous'}>
            <span className={'sr-only'}>Previous month</span>
            <Icons.Icon name={'ChevronLeft'} type={'solid'} className={'w-5'}/>
        </Buttons.Button>

        <Buttons.Button
            className={'storybook-calendars-date-select-label'}>
            Today
        </Buttons.Button>

        <Buttons.Button
            className={'storybook-calendars-date-select-next'}>
            <span className={'sr-only'}>Next month</span>
            <Icons.Icon name={'ChevronRight'} type={'solid'} className={'w-5'}/>
        </Buttons.Button>
    </Buttons.Group>
}

DateSelect.propTypes = {}
