import React from 'react'
import '../shared/style.css'
import './Tables.css'
import PropTypes from "prop-types";

export const Table = ({id, className, appendClassname, children, type}) => {
    const typeClass = type ? 'storybook-tables-table-' + type : '';
    return <table
        id={id}
        className={`${className ?? 'storybook-tables-table'} ${appendClassname} ${typeClass}`}
    >
        {children}
    </table>
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
    children: PropTypes.node.isRequired,

    /**
     * The type of Table
     */
    type: PropTypes.oneOf(['simple', 'striped'])
};
Table.defaultprops = {
    appendClassname: '',
    type: 'simple'
};