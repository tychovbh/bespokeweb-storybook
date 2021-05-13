import React, {useState} from 'react'
import {Cards, Buttons, Forms, Texts, Logos, Feedbacks} from 'bespokeweb-storybook'


export const Login = ({onSubmit, errors}) => {
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
                        Or <a href="#" className="font-medium text-green-400 hover:text-green-300">
                        start your 14-day free trial
                    </a>
                    </Texts.Small>
                </div>
            </div>


            <form className="mt-8 space-y-6" action="#" method="POST">
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

                <div className={'storybook-pages-login-fields'}>
                    <Forms.Field animated>
                        <Forms.Input id={'email-address'} value={model.email} onChange={event => {
                            setModel({...model, email: event.target.value})
                        }}/>

                        <Forms.Label htmlFor={'email-address'}>
                            Email address
                        </Forms.Label>
                    </Forms.Field>

                    <Forms.Field animated={'closed'}>
                        <Forms.Input id={'password'} type={'password'} value={model.password} onChange={event => {
                            setModel({...model, password: event.target.value})
                        }}/>

                        <Forms.Label htmlFor={'password'}>
                            Password
                        </Forms.Label>
                    </Forms.Field>
                </div>

                <div className={'storybook-pages-form-footer'}>
                    <Forms.Checkbox id={'remember-me'} label={'Remember me'}/>

                    <Forms.ForgotPassword/>
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

Login.defaultProps = {
    errors: []
}
