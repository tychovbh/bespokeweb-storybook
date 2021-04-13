import React from 'react'
import PropTypes from 'prop-types'
import {Buttons} from 'bespokeweb-storybook'

export const Toggle = ({value, onClick, disabled}) => {
    return <Buttons.Button
        disabled={disabled}
        className={`storybook-forms-toggle${value ? ' storybook-forms-toggle-active' : ''}`}
        onClick={onClick}>
        <span className="sr-only">Use setting</span>
        <span aria-hidden="true" className={'storybook-forms-toggle-handle'}/>
    </Buttons.Button>
}

Toggle.propTypes = {
    value: PropTypes.bool,
    onClick: PropTypes.func
}
Toggle.defaultProps = {
    value: false
}
