import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {Layouts} from 'bespokeweb-storybook'

export const Table = ({id, className, appendClassname, children, type}) => {
    const tableRef = useRef(null)
    className = className || 'storybook-tables-table'

    if (type) {
        className += `storybook-tables-table-${type}`
    }

    if (appendClassname) {
        className += appendClassname
    }

    return <Layouts.Scrollable childrenRef={tableRef}>
            <table id={id} className={className} ref={tableRef}>
                {children}
            </table>
    </Layouts.Scrollable>
}

Table.propTypes = {
    /**
     * The id of the Table
     */
    id: PropTypes.string,

    /**
     * Use a diferent className
     */
    className: PropTypes.string,

    /**
     * Add more classnames
     */
    appendClassname: PropTypes.string,

    /**
     * The html inside of the Table
     */
    children: PropTypes.any,

    /**
     * The type of Table
     */
    type: PropTypes.oneOf(['simple', 'striped']),
}

Table.defaultprops = {
    appendClassname: '',
    type: 'simple',
}
