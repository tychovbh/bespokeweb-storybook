import React from 'react'
import * as Helpers from 'bespokeweb-storybook/helpers'

export default function Body({children, className, appendClassName}) {
    return <div className={Helpers.classNames(className, appendClassName)}>
        {children}
    </div>
}


Body.defaultProps = {
    className: 'storybook-modals-body'
}