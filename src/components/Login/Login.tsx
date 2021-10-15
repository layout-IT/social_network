import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormExportType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormExportType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field name={'password'} placeholder={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginRedaxForm = reduxForm<FormExportType>({
    form: 'login'
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormExportType) => {
    }
    return <div>
        <h1>Login</h1>
        <LoginRedaxForm onSubmit={onSubmit}/>
    </div>
}
