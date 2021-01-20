import React from "react";
import PropTypes from 'prop-types';

export const Container = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-lists-container'} ${appendClassname}`}
    >
        {children}
    </div>
};
Container.propTypes = {
    /**
     * The id of the Container
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
     * The HTML inside of the Container
     */
    children: PropTypes.node.isRequired
};
Container.defaultProps = {
    appendClassname: ''
};

export const Header = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-lists-header'} ${appendClassname}`}
    >
        {children}
    </div>
};
Header.propTypes = {
    /**
     * The id of the Header
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
     * The HTML inside of the Header
     */
    children: PropTypes.node.isRequired
};
Header.defaultProps = {
    appendClassname: ''
};

export const Content = ({id, className, appendClassname, children}) => {
    return <dl
        id={id}
        className={`${className ?? 'storybook-lists-content'} ${appendClassname}`}
    >
        {children}
    </dl>
};
Content.propTypes = {
    /**
     * The id of the Content
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
     * The HTML inside of the Content
     */
    children: PropTypes.node.isRequired
};
Content.defaultProps = {
    appendClassname: ''
};

export const Row = ({id, className, appendClassname, children}) => {
    return <dt
        id={id}
        className={`${className ?? 'storybook-lists-row'} ${appendClassname}`}
    >
        {children}
    </dt>
};
Row.propTypes = {
    /**
     * The id of the Row
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
     * The HTML inside of the Row
     */
    children: PropTypes.node.isRequired
};
Row.defaultProps = {
    appendClassname: ''
};

export const Column = ({id, className, appendClassname, children, type, colSpan}) => {
    const titleClass = type ? 'storybook-lists-column-' + type : '';
    const colsSpanClass = colSpan ? 'col-span-' + colSpan : '';
    return <dd
        id={id}
        className={`${className ?? 'storybook-lists-column'} ${colsSpanClass} ${titleClass} ${appendClassname}`}
    >
        {children}
    </dd>
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