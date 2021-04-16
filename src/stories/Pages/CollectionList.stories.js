import React from 'react'
import 'bespokeweb-storybook/styles/style.css'
import {Collections, Navigations, Logos, Layouts, Icons} from 'bespokeweb-storybook'
import * as Helpers from 'bespokeweb-storybook/stories/helpers'

export default {
    title: 'Example/Pages/CollectionList',
    component: Collections.List,
    argsTypes: {}
}

const Template = (args) => {
   return  <div>
       <Navigations.Sidebar>
           <Navigations.Brand>
               <Logos.Logo name={'managedat'} href={'/'}/>
           </Navigations.Brand>
           <Navigations.Nav>
               {/* Home */}
               <Navigations.NavLink>
                   <Icons.Icon name={'home'}/>
                   Dashboard
               </Navigations.NavLink>
           </Navigations.Nav>
       </Navigations.Sidebar>
       <Layouts.Container type={'sidebar pb-64 pt-12'}>
           <Collections.List {...args}/>
       </Layouts.Container>
   </div>
}

export const CollectionList = Template.bind({})
CollectionList.args = {
    base_url: process.env.STORYBOOK_BASE_URL,
    collection: process.env.STORYBOOK_COLLECTION,
    params: {
        user_id: process.env.STORYBOOK_USER_ID,
        additionals: ['index', 'info'],
    },
    buttons: Helpers.CollectionButtons
}
