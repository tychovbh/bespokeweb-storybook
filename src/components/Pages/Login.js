import React, {useState} from 'react'
import {Cards, Buttons, Forms, Texts, Logos} from 'bespokeweb-storybook'


export const Login = () => {
    const [model, setModel] = useState({
        email: '',
        password: ''
    })

    return <div className={'storybook-pages-login'}>
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
                <input type="hidden" name="remember" value="true"/>

                <div>
                    <Forms.Field animated>
                        <Forms.Input id={'email-address'} value={model.email} onChange={event => {
                            setModel({...model, email: event.target.value})
                        }}/>

                        <Forms.Label htmlFor={'email-address'}>
                            Email address
                        </Forms.Label>
                    </Forms.Field>

                    <Forms.Field animated={'closed'}>
                        <Forms.Input id={'password'} value={model.password} onChange={event => {
                            setModel({...model, password: event.target.value})
                        }}/>

                        <Forms.Label htmlFor={'password'}>
                            Password
                        </Forms.Label>
                    </Forms.Field>
                </div>

                <div className={'flex items-center justify-between'}>
                    <Forms.Checkbox id={'remember-me'} label={'Remember me'}/>

                    <div className={'text-sm'}>
                        <a href="#" className={'font-medium text-green-400 hover:text-green-300'}>
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <Buttons.Button type={'default'} appendClassname={'text-white bg-green-400 hover:bg-green-500'}>
                        Sign in
                    </Buttons.Button>
                </div>
            </form>
        </Cards.Card>
    </div>
}
