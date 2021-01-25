import React from "react";
import PropTypes from "prop-types";
import {Texts} from '../../';

export const Notification = ({id, className, appendClassname, children, title, description}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-modals-notification'} ${appendClassname}`}
    >
        <div className={'storybook-modals-notification-body'}>
            <div></div>
            <div>
                <Texts.Heading type={'h4'}>{title}</Texts.Heading>
                <Texts.Primary>{description}</Texts.Primary>
            </div>
            <div></div>
        </div>
    </div>
};
Notification.propTypes = {
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
Notification.defaultProps = {
    appendClassname: ''
};