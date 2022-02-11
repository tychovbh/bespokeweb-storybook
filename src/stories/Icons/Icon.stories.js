import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Icons, Texts} from 'bespokeweb-storybook'

export default {
    title: 'Components/Icons/Icon',
    component: Icons.Icon,
    argsTypes: {}
}

const Template = (args) => <div className={'text-center'}>
    See all icons at <Texts.Link target={'_blank'} to={'https://heroicons.com/'}>HeroIcons</Texts.Link>
</div>

const iconTemplate = (args) => <Icons.Icon {...args}/>

export const Default = Template.bind({})
Default.args = {}

export const Example = iconTemplate.bind({})
Example.args = {
    name: 'Pencil',
    className: 'w-16 text-blue-500'
}
