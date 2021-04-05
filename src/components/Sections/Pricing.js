import React from "react";
import PropTypes from 'prop-types'
import {Sections, Pages} from 'bespokeweb-storybook'

export const Pricing = ({title, description, pricings}) => {
    return <div>
        <div className={'text-center grid gap-4 mb-12'}>
            <Pages.Title>{title}</Pages.Title>
            <Pages.Description>{description}</Pages.Description>
        </div>
        <div className={'storybook-sections-pricing-product-container'}>
            {
                pricings &&
                pricings.map((item, index) => {
                    return <Sections.Product key={index} {...item} />
                })
            }
        </div>
    </div>
}
