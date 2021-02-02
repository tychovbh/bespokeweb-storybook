import React from 'react'
import PropTypes from 'prop-types'
import {Texts} from '../../'

export const Title = ({id, className, appendClassname, children}) => {
    return <Texts.Heading
        id={id}
        appendClassname={`${className} ${appendClassname}`}
    >
        {children}
    </Texts.Heading>
}

Title.propTypes = {
    /**
     * The id of the Title
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
     * The HTML inside of Title
     */
    children: PropTypes.any
}

Title.defaultProps = {
    className: 'storybook-pages-title'
}