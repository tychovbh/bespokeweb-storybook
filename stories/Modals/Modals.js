import React, {useEffect} from "react";
import '../shared/style.css';
import './Modals.css';
import PropTypes from 'prop-types';
import * as Texts from '../Texts/Texts'

export const Overlay = ({id, className, appendClassname, children, open}) => {
    const showClass = open ? 'storybook-modals-visible' : '';
    return <div
        id={id}
        className={`${className ?? 'storybook-modals-overlay'} ${showClass} ${appendClassname}`}
    >
        {children}
    </div>
}
Overlay.propTypes = {
    /**
     * The id of the Overlay
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
     * The title of the Overlay
     */
    children: PropTypes.node.isRequired,

    /**
     * The visibility of the Modal
     */
    open: PropTypes.bool,
};
Overlay.defaultProps = {
    appendClassname: '',
    open: false
}

export const Modal = ({children, open, onClose}) => {
    useEffect(() => {

        if (open) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [open]);

    return <Overlay open={open} onClose={onClose}>
        {children}
        <div className={'storybook-models-onblur'} onClick={onClose}/>
    </Overlay>
}
Modal.propTypes = {
    /**
     * The HTML inside the Modal
     */
    children: PropTypes.node.isRequired,

    /**
     * The visibility of the Modal
     */
    open: PropTypes.bool,

    /**
     * The onClose method of the Modal
     */
    onClose: PropTypes.func
};
Modal.defaultProps = {
    show: false
};

export const Container = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-modals-body'} ${appendClassname}`}>
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

    /**
     * The title of the Container
     */
    children: PropTypes.node.isRequired
};
Container.defaultProps = {
    appendClassname: ''
}

export const Body = ({id, className, appendClassname, children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-modals-content'} ${appendClassname}`}
    >
        {children}
    </div>
}
Body.propTypes = {
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
     * The title of the Container
     */
    children: PropTypes.node.isRequired
};
Body.defaultProps = {
    appendClassname: ''
};

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
    children: PropTypes.node.isRequired,
};
Footer.defaultProps = {
    appendClassname: '',
    type: 'default'
}

export const Title = ({id, className, appendClassname, children}) => {
    return <Texts.Heading
        id={id}
        type={'h3'}
        appendClassname={`${className ?? 'storybook-modals-title'} ${appendClassname}`}
    >
        {children}
    </Texts.Heading>
}