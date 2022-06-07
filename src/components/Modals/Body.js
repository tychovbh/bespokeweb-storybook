import React from 'react'
import {Helpers} from 'bespokeweb-storybook'
import PropTypes from 'prop-types'

export default function Body({children, className, appendClassName}) {
    return <div className={Helpers.classNames(className, appendClassName)}>
        {children}
    </div>
}

Body.propTypes = {
    /**
     * Use a different classname
     */
    className: PropTypes.string,

    /**
     * Add more classnames
     */
    appendClassName: PropTypes.string,

    /**
     * The title of the Breadcrumbs
     */
    children: PropTypes.node.isRequired
};
Body.defaultProps = {
    className: 'storybook-modals-body'
}