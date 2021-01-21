import Success from "../../icons/check-circle.svg";
import Close from "../../icons/x.svg";
import PropTypes from "prop-types";
import React from "react";

export const Notification = ({id, className, appendClassname, children, type}) => {
    let icon = '';

    switch (type) {
        case 'success':
            icon = Success;
    }

    return <div
        id={id}
        className={`${className ?? 'storybook-modals-notification'} ${appendClassname}`}
    >
        <Container>
            <div className={'storybook-modals-notification-body'}>
                <img src={icon} alt=""/>
                <div>
                    {children}
                </div>
                <img src={Close} alt=""/>
            </div>
        </Container>
    </div>
};
Notification.propTypes = {
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
     * The title of the Buttons
     */
    children: PropTypes.node.isRequired,

    /**
     * The type of Notification
     */
    type: PropTypes.oneOf(['default', 'success'])
};
Notification.defaultProps = {
    appendClassname: '',
    type: 'default'
};