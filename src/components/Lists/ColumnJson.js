import React, {useState} from 'react'
import {Buttons, Icons, Lists} from 'bespokeweb-storybook'

function Json({data, setModal}) {
    const [open, setOpen] = useState(false)

    if (Array.isArray(data)) {
        return <>
            {data.map((item, index) => <Json key={index} index={index} data={item} setModal={setModal}/>)}
        </>
    }

    return <>
        <div className={'lists-toggle-bar'}>
            <Buttons.Button type={'dark'} onClick={() => setOpen(!open)}>
                <div className={'lists-toggle-bar-button'}>
                    open json &nbsp;<Icons.Icon name={open ? 'chevron-up' : 'chevron-down'} className={'w-8'}/>
                </div>
            </Buttons.Button>
        </div>
        <Lists.Container open={open}>
            {
                Object.keys(data).map((key, index) => {
                    let value = data[key]
                    let template = 'default'
                    if (value && typeof value === 'object') {
                        template = 'json'
                    }

                    if (typeof value === 'string' && ['true', 'false'].includes(value.toLocaleLowerCase())) {
                        template = 'tinyint'
                        value = value.toLocaleLowerCase() === 'true'
                    }

                    if (typeof value === 'boolean') {
                        template = 'tinyint'
                    }

                    const Template = Lists.templates[template]

                    return <Lists.Row key={index}>
                        <Lists.Column type={'dt'}>{key}</Lists.Column>
                        <Lists.Column>
                            <Template value={value} setModal={setModal}/>
                        </Lists.Column>
                    </Lists.Row>
                })
            }
        </Lists.Container>
    </>
}

export function ColumnJson({value, setModal}) {
    return <div>
        <Buttons.Button type={'dark'} onClick={() => {
            setModal({
                open: true, content: () => <div>
                    <Json data={typeof value === 'string' ? JSON.parse(value) : value} setModal={setModal}/>
                </div>,
            })
        }}>open json</Buttons.Button>
    </div>
}
