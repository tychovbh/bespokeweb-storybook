import React from 'react';
import './shared/style.css';
import './Button.css';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({id, className, appendClassname, children, type}) => {
    const typeClass = type ? 'storybook-button-' + type : '';
    return <button
        id={id}
        className={`${className ?? 'storybook-button'} ${typeClass} ${appendClassname}`}>
            {children}
        </button>;
};

Button.propTypes = {
  /**
   * The id of a Button
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

  /**
   * the color of a Submit button
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};

Button.defaultProps = {
  appendClassname: '',
  type: 'light'
};
