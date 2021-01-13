import React from 'react'
import '../shared/style.css'
import './Navigation.css'
import PropTypes from 'prop-types';
import {Button} from "../Button";

export const Container = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-navigation-container'} ${appendClassname}`}
    >
        {children}
    </div>
}
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
}
Container.defaultProps = {
    appendClassName: ''
}

export const Brand = ({id, className, appendClassname, img, alt}) => {
    return <img
        id={id}
        className={`${className ?? 'storybook-navigation-logo'} ${appendClassname}`}
        src={img} alt={alt}
    />
}
Brand.propTypes = {
    /**
     * The id of the Logo
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
     * The image
     */
    img: PropTypes.any
}
Brand.defaultProps = {
    appendClassname: '',
    alt: ''
}

export const Nav = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-navigation-nav'} ${appendClassname}`}
    >
        {children}
    </div>
}

export const NavLink = ({id, className, appendClassname, children, link}) => {
    return <a
        className={`${className ?? 'storybook-navigation-nav-link'} ${appendClassname}`}
        href={link}
    >
        {children}
    </a>
}

NavLink.defaultProps = {
    appendClassname: ''
}