import React from "react";
import 'bespokeweb-storybook/styles/style.css';
import {Sections} from 'bespokeweb-storybook';

export default {
    title: 'Example/Sections/Product',
    components: Sections.Product,
    argsTypes: {}
}

const Template = (args) => <Sections.Product {...args}/>;

export const Default = Template.bind({});
Default.args = {
    title: 'Hobby',
    description: 'All the basics for starting a new business',
    price: '12',
    button: 'Buy Hobby',
    list: {
        title: "What's included",
        items: [
            'Potinti felis, in cras at at ligula nunc.',
            'Orci neque eget pellentesque',
            'Potinti felis, in cras at at ligula nunc.',
            'Orci neque eget pellentesque'
        ]
    }
};
