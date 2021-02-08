import React from 'react'
import PropTypes from 'prop-types'
import {Texts} from '../../'

export const Description = ({id, className, appendClassname, children}) => {
    return <Texts.Primary
        id={id}
        appendClassname={`${className} ${appendClassname}`}
    >
        {children}
    </Texts.Primary>
}

Description.propTypes = {
    /**
     * The id of the Description
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
     * The HTML inside of Description
     */
    children: PropTypes.any
}

Description.defaultProps = {
    className: 'storybook-pages-description'
}