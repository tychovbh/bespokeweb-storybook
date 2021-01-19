import React from 'react'
import PropTypes from 'prop-types';

export const Container = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-navigation-container'} ${appendClassname}`}
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
};
Container.defaultProps = {
    appendClassName: ''
};

export const Brand = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-navigation-brand'} ${appendClassname}`}
    >
        {children}
    </div>
};
Brand.propTypes = {
    /**
     * The id of the Brand
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
     * The HTML inside of Brand
     */
    children: PropTypes.node.isRequired,
};
Brand.defaultProps = {
    appendClassname: ''
};

export const BrandImage = ({id, className, appendClassname, img, alt}) => {
    return <img
        id={id}
        className={`${className ?? 'storybook-navigation-brand-image'} ${appendClassname}`}
        src={img}
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

export const Nav = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-navigation-nav'} ${appendClassname}`}
    >
        {children}
    </div>
};
Nav.propTypes = {
    /**
     * The id of the Nav
     */
    id: PropTypes.string,

    /**
     * Use a different className
     */
    className: PropTypes.string,

    /**
     * Add more classnames
     */
    appendClassname: PropTypes.string,

    /**
     * The HTML inside of the NavLink
     */
    children: PropTypes.node.isRequired
}
Nav.defaultProps = {
    appendClassname: ''
};

export const NavLink = ({id, className, appendClassname, children, link, active}) => {
    const activeClass = active ? 'storybook-navigation-nav-link-active' : '';
    return <a
        id={id}
        className={`${className ?? 'storybook-navigation-nav-link'} ${activeClass} ${appendClassname}`}
        href={link}
    >
        {children}
    </a>
};
NavLink.propTypes = {
    /**
     * The id of the NavLink
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
     * The HTML inside of the NavLink
     */
    children: PropTypes.node.isRequired,

    /**
     * The link of the NavLink
     */
    link: PropTypes.string,

    /**
     * Is the NavLink active?
     */
    active: PropTypes.bool

}
NavLink.defaultProps = {
    appendClassname: ''
};