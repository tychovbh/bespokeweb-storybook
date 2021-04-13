import React from 'react'
import PropTypes from 'prop-types'

export const Container = ({children, open, align, onClose, appendClassname}) => {
    const openClass = open ? ' storybook-dropdowns-container-open' : ' storybook-dropdowns-container-close'
    const alignClass = align ? ' storybook-dropdowns-container-' + align : ''

    return <>
        <div
            className={`${openClass}${alignClass}${appendClassname ? ` ${appendClassname}` : ''}`}>
            {children}
        </div>
        {
            open && <div className={'storybook-dropdowns-overlay'} onClick={onClose}/>
        }
    </>
}
Container.propTypes = {
    children: PropTypes.any,
    open: PropTypes.bool.isRequired,
    align: PropTypes.string
}
Container.defaultProps = {
    align: 'left',
    appendClassname: ''
}
