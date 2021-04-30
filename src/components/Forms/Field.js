import React from 'react';
import PropTypes from 'prop-types';

export const Field = ({id, className, appendClassname, children, type, animated}) => {
    const typeClass = type ? 'storybook-forms-field-' + type : '';

    return <div
        id={id}
        className={`${className ?? 'storybook-forms-field'} ${typeClass} ${appendClassname} ${animated ? 'storybook-forms-field-animated': ''}`}
    >
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
    appendClassname: '',
    type: 'default'
};
