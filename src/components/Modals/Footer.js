import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'

export default function Footer({className, appendClassName, children}) {
    return <div className={Helpers.classNames(className, appendClassName)}>
        {children}
    </div>
};
Footer.propTypes = {

    /**
     * Use a different classname
     */
    className: PropTypes.string,

    /**
     * Add more classnames
     */
    appendClassName: PropTypes.string,

    /**
     * The title of the Buttons
     */
    children: PropTypes.node.isRequired,
}

Footer.defaultProps = {
    className: 'storybook-modals-footer'
}