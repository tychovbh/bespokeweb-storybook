import * as Texts from "../Texts/Texts";
import React from "react";

export const Title = ({id, className, appendClassname, children}) => {
    return <Texts.Heading
        id={id}
        type={'h3'}
        appendClassname={`${className ?? 'storybook-modals-title'} ${appendClassname}`}
    >
        {children}
    </Texts.Heading>
};