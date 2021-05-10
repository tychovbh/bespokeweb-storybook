import React, {useState} from 'react'
import {Cards, Buttons, Forms, Texts, Logos} from 'bespokeweb-storybook'
import {Fields} from "../Collections";

export const FormFields = ({model, setModel}) => {
    return <div className={'grid gap-4'}>
        <Forms.Field animated>
            <Forms.Input id={'email'} value={model.email} onChange={event => {
                setModel({...model, email: event.target.value})
            }}/>

            <Forms.Label htmlFor={'firstname'}>
                Email
            </Forms.Label>
        </Forms.Field>
    </div>
}

export const ForgottenPassword = ({onSubmit}) => {
    const [model, setModel] = useState({
        firstname: '',
        prefix: '',
        lastname: '',
        email: '',
        password: '',
        password_repeat: ''
    })

    return <div className={'storybook-pages-login'}>
        <Cards.Card>
            <div>
                <div className={'text-center'}>
                    <Logos.Logo name={'managedat'}/>

                    <Texts.Heading type={'h2'} appendClassname={'mt-6'}>
                        <span className={'text-3xl'}>
                            Forgotten Password
                        </span>
                    </Texts.Heading>
                    <Texts.Small appendClassname={'mt-2'}>
                        Don't have an account? <a href="#"
                                                  className={'font-medium text-green-400 hover:text-green-300'}>
                        Register</a>
                    </Texts.Small>
                </div>
            </div>
            <form className="mt-8 mb-6" action="#" method="POST">

                <Texts.Small>
                    Enter your email address below to reset your password
                </Texts.Small>

                <FormFields model={model} setModel={setModel}/>

                <div className={'storybook-pages-login-form-footer'}>
                    <Forms.Checkbox id={'remember-me'} label={'Remember me'}/>

                    <div className={'text-sm'}>
                        <a href="#" className={'storybook-pages-login-forgot-password'}>
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <Buttons.Button
                        type={'default'}
                        appendClassname={'text-white bg-green-400 hover:bg-green-500'}
                        onClick={() => onSubmit(model)}
                    >
                        Sign in
                    </Buttons.Button>
                </div>
            </form>
        </Cards.Card>
    </div>
}
