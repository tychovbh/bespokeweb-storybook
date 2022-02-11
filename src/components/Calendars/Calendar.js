import React from 'react'
import {Calendars} from 'bespokeweb-storybook'

export default function Calendar({children}) {
    return <Calendars.Container>
        {children}
    </Calendars.Container>
}

Calendar.PropTypes = {}
