import React from "react"
import PropTypes from "prop-types"
import {Texts, Buttons, Icons} from 'bespokeweb-storybook'

const icons = {
    success: {
        className: 'text-green-500',
        icon: 'check-circle'
    },
    warning: {
        className: 'text-orange-500',
        icon: 'exclamation'
    },
    danger: {
        className: 'text-red-500',
        icon: 'exclamation-shield'
    },
}

export const Notification = ({id, className, appendClassname, children, type, title, description}) => {
    const typeClass = type ? ' storybook-modals-notification-' + type : ''

    if (children) {
        return <div
            id={id}
            className={`${className ?? 'storybook-modals-notification'}${typeClass} ${appendClassname}`}
        >
            <div className={'storybook-modals-notification-body'}>
                {children}
            </div>
        </div>
    }

    return <div
        id={id}
        className={`${className ?? 'storybook-modals-notification'}${typeClass} ${appendClassname}`}
    >
        <div className={'storybook-modals-notification-body'}>
            {
                type &&
                <Icons.Icon className={`${icons[type].className} storybook-modals-notification-icon`} name={icons[type].icon}/>
            }
            <div className={'storybook-modals-notification-content'}>
                <Texts.Heading type={'h4'}>{title}</Texts.Heading>
                <Texts.Primary>{description}</Texts.Primary>
            </div>
            <div className={'storybook-modals-notification-close'}>
                <Buttons.Button>
                    <Icons.Icon className={`storybook-modals-notification-close`} name={'x'}/>
                </Buttons.Button>
            </div>
        </div>
    </div>
}

Notification.propTypes = {
    /**
     * The id of the Breadcrumbs
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
     * The type of Notification
     */
    type: PropTypes.oneOf(['default', 'success', 'warning', 'danger'])
};
Notification.defaultProps = {
    appendClassname: ''
}
