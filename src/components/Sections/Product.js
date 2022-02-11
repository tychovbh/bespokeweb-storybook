import React from 'react';
import PropTypes from 'prop-types';
import {Texts, Buttons, Icons} from 'bespokeweb-storybook'

export const Product = ({id, className, appendClassname, title, description, price, button, list}) => {
    return <div
        id={id}
        className={`${className} ${appendClassname}`}
    >
        <div className={'storybook-sections-pricing-details'}>
            <Texts.Heading type={'h3'} appendClassname={'mb-4'}>{title}</Texts.Heading>

            <Texts.Primary>{description}</Texts.Primary>

            <div className={'storybook-sections-pricing-price'}>
                <Texts.Heading>&euro;{price}</Texts.Heading>
                <Texts.Primary>/mo</Texts.Primary>
            </div>

            <Buttons.Button type={'dark'} appendClassname={'w-full'}>{button}</Buttons.Button>
        </div>
        <div className={'storybook-sections-pricing-list'}>
            <div>
                <Texts.Heading type={'h4'} appendClassname={'uppercase'}>{list.title}</Texts.Heading>
                {
                    list &&
                    list.items.map((item, index) => {
                        return <div key={index} className={'storybook-sections-pricing-list-item flex'}>
                            <Icons.Icon name={'Check'} className={'text-green-400 w-6 mr-3'}/>
                            <Texts.Primary appendClassname={'flex-1'}>{item}</Texts.Primary>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
};

Product.propTypes = {
    /**
     * The id of the Pricing component
     */
    id: PropTypes.string,

    /**
     * Use a different className
     */
    className: PropTypes.string,

    /**
     * Add more classNames
     */
    appendClassname: PropTypes.string
};
Product.defaultProps = {
    className: 'storybook-sections-pricing',
    appendClassname: ''
};
