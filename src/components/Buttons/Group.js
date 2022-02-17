import PropTypes from 'prop-types'
import React from 'react'
import * as Helpers from 'bespokeweb-storybook/helpers'

export const Group = ({className, appendClassname, children}) => {

    return <div className={Helpers.classNames(className, appendClassname)}>
        {children}
    </div>
}

Group.propTypes = {
    /**
     * Change the className
     */
    className: PropTypes.string,

    /**
     * Add more classNames
     */
    appendClassname: PropTypes.string,

    /**
     * The HTML inside
     */
    children: PropTypes.node.isRequired,
}

Group.defaultProps = {
    className: 'storybook-buttons-group',
    appendClassname: '',
}
