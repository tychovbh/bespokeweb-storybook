import React, {useEffect} from "react";
import PropTypes from 'prop-types';

export const File = ({id, className, appendClassname, label, placeholder, onChange, value}) => {
    useEffect(() => {
        const actualBtn = document.getElementById(id);

        const fileChosen = document.getElementById('storybook-forms-file-chosen');

        actualBtn.addEventListener('change', function(){
            fileChosen.textContent = this.files[0].name
        });
    });


    return <div>
        <input
            id={id}
            type="file"
            value={value}
            onChange={onChange}
            hidden
        />
        <label
            htmlFor={id}
            className={`${className} ${appendClassname}`}
        >
            <span id={'storybook-forms-file-chosen'}>{placeholder}</span>
            {label}
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
    appendClassname: PropTypes.string
};

File.defaultProps = {
    id: 'storybook-forms-file-input',
    className: 'storybook-forms-file storybook-button-download',
    appendClassname: ''
};