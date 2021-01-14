import React from 'react';
import '../shared/style.css';
import './Elements.css';
import PropTypes from 'prop-types';

export const Avatar = ({id, className, appendClassname, type, img, notificationColor}) => {
    const typeClass = 'storybook-elements-avatar-' + type;
    return <div
        id={id}
        className={`${className ?? 'storybook-elements-avatar'} ${typeClass} ${appendClassname}`}
    >
        <div className={'storybook-elements-avatar-notification'} style={{backgroundColor: notificationColor}}/>
        <img src={img} alt={'avatar'}/>
    </div>
};
Avatar.propTypes = {
    /**
     * The id of the Avatar
     */
    id: PropTypes.string,

    /**
     * The className of the Avatar
     */
    className: PropTypes.string,

    /**
     * Add more classNames to the Avatar
     */
    appendClassname: PropTypes.string,

    /**
     * The type of Avatar
     */
    type: PropTypes.oneOf(['circular', 'circular-notification', 'rounded', 'rounded-notification'])
};
Avatar.defaultProps = {
    appendClassname: '',
    type: 'circular',
    notificationColor: 'white'
};