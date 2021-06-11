import React, {useState} from 'react'
import {Cards, Buttons, Forms, Texts, Logos} from 'bespokeweb-storybook'
import {Fields} from "../Collections";
import Form from "react-form-foundry";

export const PasswordReset = ({onSubmit, form}) => {
    const [model, setModel] = useState({
        password: '',
        password_repeat: ''
    })

    return <div className={'storybook-pages-form'}>
        <Cards.Card>
            <div>
                <div className={'text-center'}>
                    <Logos.Logo name={'managedat'}/>

                    <Texts.Heading type={'h2'} appendClassname={'mt-6'}>
                        <span className={'text-3xl'}>
                            Reset password
                        </span>
                    </Texts.Heading>
                </div>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true"/>

                <Form
                    form={form}
                    components={{
                        input: ({name, value, onChange, type, placeholder}) => <Forms.Field animated>
                            <Forms.Input id={name} name={name} value={value} type={type} onChange={onChange}/>

                            <Forms.Label htmlFor={name}>
                                {placeholder}
                            </Forms.Label>
                        </Forms.Field>,
                        submit: () => <Buttons.Button
                            type={'default'}
                            appendClassname={'text-white bg-green-400 hover:bg-green-500'}
                            onClick={() => onSubmit(model)}
                        >
                            Reset
                        </Buttons.Button>
                    }}
                />
            </form>
        </Cards.Card>
    </div>
}
