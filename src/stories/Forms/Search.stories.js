import React, {useState} from 'react'
import {Forms} from 'bespokeweb-storybook'
import {Router} from 'ra-fetch'

Router.index('todos', 'https://jsonplaceholder.typicode.com/todos')

export default {
    title: 'Example/Forms/Search',
    component: Forms.Search,
    args: {}
}

const Template = () => {
    const [result, setResult] = useState({todo_id: null, todo_label: ''})

    return <div>
        <Forms.Search
            route={'todos'}
            value={result.todo_id}
            onChange={(id, label) => {
                setResult({todo_id: id, todo_label: label})
            }}
            param={'userId'}
            id={'userId'}
            label={'title'}
        />
    </div>
}

export const Search = Template.bind({})
Search.args = {}
