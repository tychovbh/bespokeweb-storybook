import React from "react";
import '../shared/style.css';
import './Modals.css';
import PropTypes from 'prop-types';
import * as Texts from '../Texts/Texts'

export const Overlay = ({children}) => {
    return <div className={'storybook-modals-overlay'}>
        {children}
    </div>
}
Overlay.propTypes = {};
Overlay.defaultProps = {}

export const Modal = ({children}) => {
    return <Overlay>
        {children}
    </Overlay>
}
Modal.propTypes = {};
Modal.defaultProps = {}

export const Content = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-modals-content'} ${appendClassname}`}
    >
        {children}
    </div>
}

Content.propTypes = {};
Content.defaultProps = {
    appendClassname: ''
};

export const Body = ({children}) => {
    return <div className={'storybook-modals-body'}>
        {children}
    </div>
}
Body.propTypes = {};
Body.defaultProps = {}

export const Footer = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-modals-footer'} ${appendClassname}`}
    >
        {children}
    </div>
}
Footer.propTypes = {
    /**
     * The id of the Modal
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
     * The title of the Button
     */
    children: PropTypes.string,
};
Footer.defaultProps = {
    appendClassname: '',
    type: 'default'
}

export const Title = ({children}) => {
    return <Texts.Heading
        type={'h3'}
        appendClassname={'storybook-modals-title'}
    >
        {children}
    </Texts.Heading>
}