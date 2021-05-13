import React, {useState} from 'react'
import {Cards, Buttons, Forms, Texts, Logos, Feedbacks} from 'bespokeweb-storybook'

export const FormFields = ({model, setModel}) => {
    return <div className={'storybook-pages-login-fields'}>
        <Forms.Field animated>
            <Forms.Input id={'firstname'} value={model.firstname} onChange={event => {
                setModel({...model, firstname: event.target.value})
            }}/>

            <Forms.Label htmlFor={'firstname'}>
                First name
            </Forms.Label>
        </Forms.Field>

        <Forms.Field animated>
            <Forms.Input id={'prefix'} value={model.prefix} onChange={event => {
                setModel({...model, prefix: event.target.value})
            }}/>

            <Forms.Label htmlFor={'prefix'}>
                Prefix
            </Forms.Label>
        </Forms.Field>

        <Forms.Field animated>
            <Forms.Input id={'lastname'} value={model.lastname} onChange={event => {
                setModel({...model, lastname: event.target.value})
            }}/>

            <Forms.Label htmlFor={'lastname'}>
                Last name
            </Forms.Label>
        </Forms.Field>

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

        <Forms.Field animated={'closed'}>
            <Forms.Input id={'password-repeat'} type={'password'} value={model.password_repeat} onChange={event => {
                setModel({...model, password_repeat: event.target.value})
            }}/>

            <Forms.Label htmlFor={'password-repeat'}>
                Repeat password
            </Forms.Label>
        </Forms.Field>
    </div>

}

export const Register = ({onSubmit, errors}) => {
    const [model, setModel] = useState({
        firstname: '',
        prefix: '',
        lastname: '',
        email: '',
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
                            Create a new account
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
                <input type="hidden" name="remember" value="true"/>

                <FormFields model={model} setModel={setModel}/>

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

Register.defaultProps = {
    errors: []
}
