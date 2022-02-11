import PropTypes from 'prop-types'
import React from 'react'
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";

export const Group = ({id, className, appendClassname, children}) => {
    return <div className={'storybook-buttons-group'}>
        {children}
    </div>
}

Group.propTypes = {
    /**
     * The id of a Buttons
     */
    id: PropTypes.string,

    /**
     * Use a different classname
     */
    className: PropTypes.string,

    /**
     * Add more classnames
     */
    appendClassname: PropTypes.string,

    /**
     * The title of the Buttons
     */
    children: PropTypes.string,
}

Group.defaultProps = {
    appendClassname: '',
}
