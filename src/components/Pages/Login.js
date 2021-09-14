import React, {useState} from 'react'
import {Cards, Buttons, Forms, Texts, Logos, Feedbacks} from 'bespokeweb-storybook'
import Form from 'react-form-foundry'

export const Login = ({onSubmit, errors, form}) => {
    const [model, setModel] = useState({
        email: '',
        password: ''
    })

    return <div className={'storybook-pages-form'}>
        <Cards.Card>
            <div>
                <div className={'text-center'}>
                    <Logos.Logo name={'managedat'}/>

                    <Texts.Heading type={'h2'} appendClassname={'mt-6'}>
                        <span className={'text-3xl'}>
                            Sign in to your account
                        </span>
                    </Texts.Heading>

                    <Texts.Small appendClassname={'mt-2'}>
                        Or <a href={'#'} className={'font-medium text-green-400 hover:text-green-300'}>
                        start your 14-day free trial
                    </a>
                    </Texts.Small>
                </div>
            </div>


            <form className={'mt-8 space-y-6'} action={'#'} method={'POST'}>
                {
                    errors.length !== 0 &&
                    <div className={'grid gap-4'}>
                        {
                            errors.map((error, index) => <Feedbacks.Alert key={index} type={'danger'}>
                                    <Texts.Primary>{error}</Texts.Primary>
                                </Feedbacks.Alert>
                            )
                        }
                    </div>
                }

                <input type="hidden" name="remember" value="true"/>

                <Form
                    form={form}
                    onSubmit={onSubmit}
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
                        >
                            Sign in
                        </Buttons.Button>
                    }}
                />

                <div className={'storybook-pages-form-footer'}>
                    <Forms.Checkbox id={'remember-me'} label={'Remember me'}/>

                    <Forms.ForgotPassword/>
                </div>
            </form>
        </Cards.Card>
    </div>
}

Login.defaultProps = {
    errors: []
}
