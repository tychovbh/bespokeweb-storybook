import React from 'react'
import {Buttons, Cards, Feedbacks, Forms, Texts, Logos} from 'bespokeweb-storybook'
import Form from "react-form-foundry";

export const ForgottenPassword = ({onSubmit, errors, form}) => {
    const [model, setModel] = useState({
        email: ''
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
                    <Texts.Small appendClassname={'text-center mb-6'}>
                        Enter your email below to reset your password
                    </Texts.Small>

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
                                Sign in
                            </Buttons.Button>
                        }}
                    />
                </div>
            </form>
        </Cards.Card>
    </div>
}

ForgottenPassword.defaultProps = {
    errors: []
}
