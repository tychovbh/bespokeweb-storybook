import React, {useState} from 'react'
import {Buttons, Cards, Feedbacks, Forms, Texts, Logos} from 'bespokeweb-storybook'

export const FormFields = ({model, setModel}) => {
    return <div className={'mt-4 grid gap-4'}>
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

export const ForgottenPassword = ({onSubmit, errors}) => {
    const [model, setModel] = useState({
        email: '',
    })

    return <div className={'storybook-pages-form'}>
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
                        Already have an account? <a href="#"
                                                    className={'font-medium text-green-400 hover:text-green-300'}>
                        Sign in</a>
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
                <div>
                    <Texts.Small appendClassname={'text-center'}>
                        Enter your email below to reset your password
                    </Texts.Small>

                    <FormFields model={model} setModel={setModel}/>
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

ForgottenPassword.defaultProps = {
    errors: []
}
