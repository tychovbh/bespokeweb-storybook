import React, {useState} from 'react'
import {Cards, Buttons, Forms, Texts, Logos} from 'bespokeweb-storybook'
import {Fields} from "../Collections";

export const FormFields = ({model, setModel}) => {
    return <div className={'storybook-pages-login-fields'}>
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

export const ForgottenPassword = () => {
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
                            Reset password
                        </span>
                    </Texts.Heading>
                </div>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true"/>

                <FormFields model={model} setModel={setModel}/>

                <div>
                    <Buttons.Button type={'default'} appendClassname={'text-white bg-green-400 hover:bg-green-500'}>
                        Reset
                    </Buttons.Button>
                </div>
            </form>
        </Cards.Card>
    </div>
}
