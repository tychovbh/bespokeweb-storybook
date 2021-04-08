import React, {useEffect} from "react";
import PropTypes from 'prop-types';

export const Overlay = ({id, className, appendClassname, children, open, type}) => {
    let showClass = open ? ' storybook-modals-visible' : '';

    if (appendClassname) {
        showClass += ' ' + appendClassname
    }

    return <div
        id={id}
        className={`${className || 'storybook-modals-overlay'}${showClass} storybook-modals-${type}`}
    >
        {children}
    </div>
};

export const Modal = ({children, open, onClose, type = 'default'}) => {
    useEffect(() => {
        if (open) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [open]);

    return <Overlay open={open} onClose={onClose} type={type}>
        <div className={'storybook-modals-onblur'} onClick={onClose}/>
        <div className={`storybook-modals`}>
            {children}
        </div>
    </Overlay>
};

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
    onClose: PropTypes.func,

    /**
     * Modal Type
     */
    type: PropTypes.string
};

Modal.defaultProps = {
    open: false,
    type: 'default'
};
