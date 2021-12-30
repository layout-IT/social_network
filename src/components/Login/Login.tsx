import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {logIn} from "../redux/auth-reducer";
import style from './Login.module.scss'
import {Redirect} from "react-router-dom";

type FormExportType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormExportType>> = (props) => {
    return (<div className={style.common}>
            <div>Email: farsi-avanti@yandex.ru</div>
            <div>Password: 12345678</div>
            <form onSubmit={props.handleSubmit} className={style.wrapper}>
                <div>
                    <Field name={'email'} placeholder={'email'} component={'input'} className={style.input}/>
                </div>
                <div>
                    <Field name={'password'} placeholder={'password'} component={'input'} type={'password'}
                           className={style.input}/>
                </div>
                <div className={style.rememberMe}>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> <span
                    className={style.rememberMeText}>remember me</span>
                </div>
                <div>
                    <button className={style.button}>Login</button>
                </div>
            </form>
        </div>
    )
}

export const LoginRedaxForm = reduxForm<FormExportType>({
    form: 'login'
})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormExportType) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile/18971'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginRedaxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {logIn})(Login)

