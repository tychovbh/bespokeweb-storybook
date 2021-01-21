import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {Overlay} from "./Overlay";

export const Modal = ({children, open, onClose}) => {
    useEffect(() => {
        if (open) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [open]);

    return <Overlay open={open} onClose={onClose}>
        <div className={'storybook-modals-model'}>
            {children}
        </div>
        <div className={'storybook-models-onblur'} onClick={onClose}/>
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
    onClose: PropTypes.func
};

Modal.defaultProps = {
    show: false
};