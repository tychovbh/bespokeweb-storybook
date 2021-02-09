import React from "react";
import PropTypes from 'prop-types';

export const File = ({id, className, appendClassname, children, placeholder, onChange, value = {}}) => {
    return <div className={`${className} ${appendClassname}`}>
        <input
            id={id}
            type={'file'}
            onChange={event => onChange(event.target.files[0])}
            hidden
        />
        <label
            htmlFor={id}
            className={'storybook-forms-file-label'}
        >
            <span>{value.name || placeholder}</span>
            {children}
        </label>
    </div>
};

File.propTypes = {
    /**
     * The id of the File input
     */
    id: PropTypes.string,

    /**
     * Use a different className for the File input
     */
    className: PropTypes.string,

    /**
     * Add more classNames to the File input
     */
    appendClassname: PropTypes.string,

    /**
     * The onChange of the File input
     */
    onChange: PropTypes.func,

    /**
     * The value of the File input
     */
    value: PropTypes.object,

    /**
     * The value of the File input
     */
    children: PropTypes.any
};

File.defaultProps = {
    id: 'storybook-forms-file-input',
    className: 'storybook-forms-file storybook-button-download',
    appendClassname: ''
};
