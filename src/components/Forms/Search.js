import React, {useState} from 'react'
import {Buttons, Forms} from 'bespokeweb-storybook'
import {Fetcher} from 'ra-fetch'

let final_search = null

export default function Search({value, onChange, route, param, id, label}) {
    const [results, setResults] = useState(Fetcher.collection)

    function performSearch(params) {
        final_search = params[param]

        if (final_search === '') {
            delete params[param]
            setResults(Fetcher.collection())
            return
        }

        if (final_search.length === 1) {
            return
        }

        setTimeout(() => {
            if (params[param] === final_search) {
                Fetcher.index(route, params).then(response => {
                    setResults(response)
                })
            }
        }, 400)

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
