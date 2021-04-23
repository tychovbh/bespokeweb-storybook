import React from 'react'
import {Cards, Buttons, Forms, Texts, Logos} from 'bespokeweb-storybook'


export const Login = () => {
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
                        Or <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        start your 14-day free trial
                    </a>
                    </Texts.Small>
                </div>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true"/>

                <div>
                    <Forms.Field>
                        <Forms.Label htmlFor={'email-address'}>
                            Email address
                        </Forms.Label>

                        <Forms.Input id={'email-address'}/>
                    </Forms.Field>

                    <Forms.Field>
                        <Forms.Label htmlFor={'password'}>
                            Password
                        </Forms.Label>

                        <Forms.Input id={'password'}/>
                    </Forms.Field>
                </div>

                <div className="flex items-center justify-between">
                    <Forms.Checkbox id={'remember-me'} label={'Remember me'}/>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign in
                    </button>
                </div>
            </form>
        </Cards.Card>
    </div>
}
