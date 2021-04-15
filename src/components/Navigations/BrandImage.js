import React from "react";
import PropTypes from "prop-types";

export const BrandImage = ({id, className, appendClassname, src, alt}) => {
    className = className || 'storybook-navigations-brand-image'
    if (appendClassname) {
        className += ` ${appendClassname}`
    }
    return <img
        id={id}
        className={className}
        src={src}
        alt={alt}
    />
};

BrandImage.propTypes = {
    /**
     * The id of the BrandImage
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
     * The image of the BrandImage
     */
    img: PropTypes.string,

    /**
     * The alt of the BrandImage
     */
    alt: PropTypes.string
};

BrandImage.defaultProps = {
    appendClassname: '',
    alt: ''
};
