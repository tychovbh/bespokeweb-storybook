import React from "react";
import '../shared/style.css';
import PropTypes from 'prop-types';

export const Heading = ({id, className, appendClassname, children, type}) => {
    switch (type) {
        case 'h1':
            return <h1 id={id} className={`${className ?? 'storybook-texts-heading-h1'} ${appendClassname}`}>
                {children}
            </h1>;
        case 'h2':
            return <h2 id={id} className={`${className ?? 'storybook-texts-heading-h2'} ${appendClassname}`}>
                {children}
            </h2>;
        case 'h3':
            return <h3 id={id} className={`${className ?? 'storybook-texts-heading-h3'} ${appendClassname}`}>
                {children}
            </h3>;
        case 'h4':
            return <h4 id={id} className={`${className ?? 'storybook-texts-heading-h4'} ${appendClassname}`}>
                {children}
            </h4>;
        case 'h5':
            return <h5 id={id} className={`${className ?? 'storybook-texts-heading-h5'} ${appendClassname}`}>
                {children}
            </h5>;
        case 'h6':
            return <h6 id={id} className={`${className ?? 'storybook-texts-heading-h6'} ${appendClassname}`}>
                {children}
            </h6>;
    }
};
Heading.propTypes = {
    /**
     * The id of the Heading
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
     * The text of the Heading
     */
    children: PropTypes.node.isRequired,

    /**
     * The type of Heading
     */
    type: PropTypes.oneOf(['h1', 'h2', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
Heading.defaultProps = {
    appendClassname: '',
    type: 'h1'
};