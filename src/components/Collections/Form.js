import React from 'react'
import {FormBuilder, FormSubmit} from 'react-form-foundry'
import {Texts, Forms, Collections, Buttons as ButtonsComponents} from 'bespokeweb-storybook'

export const Form = ({form, return_url, collection, params, buttons, id}) => {
    return_url = return_url || `/${collection}`
    const components = {
        title: Texts.Heading,
        field: Forms.Field,
        input: ({name, value, onChange, type}) => <Forms.Input
            onChange={onChange}
            name={name}
            type={type}
            value={value}/>,
        select: ({name, value, onChange, children, label}) => <Forms.Select
            onChange={onChange}
            name={name}
            children={[<option key={'empty'}>Pick a {label}</option>].concat(children)}
            value={value}/>,
        label: Forms.Label,
        submit: () => <Forms.Submit
            appendClassname={'collections-save-submit'}
            type={'success'}
            title={id ? 'Edit' : 'Create'}/>,
    }

    return <FormBuilder
        defaults={form.defaults}
        method={'post'}
        onResponse={response => {
            if ([201, 200].includes(response.status)) {
                window.location.href = return_url
            }
        }}
        components={components}
        form={{...form, route: form.route + `?user_id=${params.user_id}`}}
    >
        <Collections.Buttons>
            <ButtonsComponents.ButtonLink href={return_url} appendClassname={'mr-4'}>Back</ButtonsComponents.ButtonLink>
            <FormSubmit components={components}/>
        </Collections.Buttons>
        <Collections.Fields/>
    </FormBuilder>

}
