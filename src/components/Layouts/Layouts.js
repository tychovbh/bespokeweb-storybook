import React from "react";

export const Container = ({id, className, appendClassname = '', children}) => {
    return <div
        id={id}
        className={`${className ?? 'storybook-layouts-container'} ${appendClassname}`}
    >
        {children}
    </div>
}