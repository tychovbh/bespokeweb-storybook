import React from 'react'
import PropTypes from 'prop-types'
import {Buttons} from 'bespokeweb-storybook'

export const LinkButton = ({onClick, children}) => {
    return <Buttons.Button onClick={onClick} className={'storybook-dropdowns-link-button'}>
        {children}
    </Buttons.Button>
}
LinkButton.propTypes = {
    /**
     * The onClick function fo the LinkButton
     */
    onClick: PropTypes.func,

    /**
     * The HTML inside of the LinkButton
     */
    children: PropTypes.any
}
LinkButton.defaultProps = {}
