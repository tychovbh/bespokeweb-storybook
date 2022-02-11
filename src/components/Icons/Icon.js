import React from 'react'
import PropTypes from 'prop-types'
import * as Outline from '@heroicons/react/outline'
import * as Solid from '@heroicons/react/solid'

const Icons = {
    outline: Outline,
    solid: Solid
}

export default function Icon({name, className, type = 'outline'}) {
    const Icon = Icons[type][`${name}Icon`]

    return <Icon className={className}/>
}

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.oneOf(['outline', 'solid'])
}
