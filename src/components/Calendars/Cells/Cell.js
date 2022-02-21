import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from 'bespokeweb-storybook/helpers'

export default function Cell({id, className, appendClassName, children, isCurrentMonth, active}) {
    let classNames = className

    if (isCurrentMonth) {
        classNames += ` ${className}-current-month`
    }

    // if (active) {
    //     classNames += ` ${className}-active`
    // }

    return <>
        {/*<div id={id} className={Helpers.classNames(className + '-desktop', appendClassName)}>*/}
        {/*    {children}*/}
        {/*</div>*/}

        <button id={id} className={Helpers.classNames(classNames, appendClassName)}>
            {children}
        </button>
    </>
}

Cell.propTypes = {
    /**
     * Add an id
     */
    id: PropTypes.string,

    /**
     * Use a different className
     */
    className: PropTypes.string,

    /**
     * Add more classNames
     */
    appendClassname: PropTypes.string,
}

Cell.defaultProps = {
    className: 'storybook-calendars-cells-cell'
}
