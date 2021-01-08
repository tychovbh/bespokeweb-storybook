import React from 'react';
import '../shared/style.css'
import './Submit.css'
import PropTypes from 'prop-types';

/**
 * Form Submit component
 */
export const Submit = ({id, className, appendClassname, title, type, onClick}) => {
    const typeClass = type ? 'storybook-forms-submit-' + type : '';
    return <input
        id={id}
        className={`${className ?? 'storybook-forms-submit'} ${typeClass} ${appendClassname}`}
        type={'submit'}
        value={title}
        onClick={onClick}/>
};

Submit.propTypes = {
    /**
     * The id of a Submit button
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
     * The title of a Submit button
     */
    title: PropTypes.string,

    /**
     * the color of a Submit button
     */
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};

Submit.defaultProps = {
    appendClassname: '',
    type: 'light'
};
