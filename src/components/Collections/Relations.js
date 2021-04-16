import React, {useState} from 'react'
import {Collections, Buttons, Layouts} from 'bespokeweb-storybook'
import PropTypes from 'prop-types'

export const Relations = ({relations, base_url, database, params, model}) => {
    relations = relations.filter(relation => relation['type'] === 'hasMany')
    const [active, setActive] = useState(relations[0] || {})

    return <>
        <Layouts.Container>
            <Collections.Title>Relations</Collections.Title>
            <div className={'storybook-collections-relations-tabs'}>
                {
                    relations.map((relation, index) => {
                        let className = 'storybook-collections-relations-tab'
                        if (relation.name === active.name) {
                            className += ' storybook-collections-relations-tab-active'
                        }

                        return <div
                            className={className}
                            key={index}>
                            <Buttons.Button onClick={() => setActive(relation)}>{relation.name}</Buttons.Button>
                        </div>
                    })
                }
            </div>
        </Layouts.Container>
        {
            active.name && <Collections.List
                relation={active}
                base_url={base_url}
                collection={`${database}/${active.name}`}
                params={{
                    ...params,
                    [active.reference]: model[active.column],
                    additionals: ['index', 'info'],
                }}
            />
        }

    </>
}


Relations.propTypes = {
    /**
     * The models relations
     */
    relations: PropTypes.array,

    /**
     * The base url
     */
    base_url: PropTypes.string,

    /**
     * The collection name
     */
    collection: PropTypes.string,

    /**
     * The database name
     */
    database: PropTypes.string,

    /**
     * Te request params added to all requests
     */
    params: PropTypes.object,

    /**
     * The model
     */
    model: PropTypes.object,
}
