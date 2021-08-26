import React, {useState} from 'react'
import {Buttons, Forms} from 'bespokeweb-storybook'
import {Fetcher} from 'ra-fetch'

export default function Search({value, onChange, route, param, id, label}) {
    const [results, setResults] = useState(Fetcher.collection)

    function performSearch(params) {
        Fetcher.index(route, params).then(response => {
            setResults(response)
        })
    }

    return <div className={'storybook-forms-search'}>
        <Forms.Input
            value={value}
            onChange={value => {
                onChange(null, value)
                performSearch({[param]: value})
            }}
        />
        {
            Boolean(results.data.length) &&
            <ul className={'storybook-forms-search-results'}>
                {results.data.map((result, index) => {
                        return <li key={index}>
                            <Buttons.Button
                                type={'search'}
                                onClick={() => {
                                    onChange(result[id], result[label])
                                    setResults(Fetcher.collection)
                                }}
                            >
                                {result[label]}
                            </Buttons.Button>
                        </li>
                    }
                )}
            </ul>
        }
    </div>
}

Search.defaultProps = {
    param: 'search'
}
