import React from 'react'
import '../shared/style.css'
import './Field.css'
import PropTypes from 'prop-types'

export const Field = ({className, children, type}) => {
    const typeClass = type ? 'storybook-forms-field-' + type : '';
    return <div className={`${className ?? 'storybook-forms-field'} ${typeClass}`}>
        {children}
    </div>
};

Field.propTypes = {
    /**
     * The children
     */
    children: PropTypes.node.isRequired,

    /**
     * The type of Field
     */
    type: PropTypes.oneOf(['default', 'inline'])
};

Field.defaultProps = {
    type: 'default'
};