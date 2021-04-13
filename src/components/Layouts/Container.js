import React from "react";

export const Container = ({id, className, type = 'default', appendClassname = '', children}) => {
    className = className || `storybook-layouts-container-${type}`

    if (appendClassname) {
        className += ' ' + appendClassname
    }

    return <div id={id} className={className}>
        {children}
    </div>
};
