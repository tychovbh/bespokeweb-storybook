import React from 'react'
import PropTypes from 'prop-types'

export const Column = ({id, className, appendClassname, children, type, colSpan}) => {
    const titleClass = type ? 'storybook-lists-column-' + type : '';
    const colsSpanClass = colSpan ? 'col-span-' + colSpan : '';

    if (type === 'dt') {
        return <dt
            id={id}
            className={`${className ?? 'storybook-lists-column'} ${colsSpanClass} ${titleClass} ${appendClassname}`}
        >
            {children}
        </dt>
    } else {
        return <dd
            id={id}
            className={`${className ?? 'storybook-lists-column'} ${colsSpanClass} ${titleClass} ${appendClassname}`}
        >
            {children}
        </dd>
    }
};

Column.propTypes = {
    /**
     * The id of the Column
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
     * The HTML inside of the Column
     */
    children: PropTypes.node.isRequired,

    /**
     * The type of Column
     */
    type: PropTypes.oneOf(['dt', 'dd'])
};

Column.defaultProps = {
    appendClassname: '',
    type: 'dd'
};
