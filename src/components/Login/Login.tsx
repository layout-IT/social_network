import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {logIn} from "../redux/auth-reducer";

type FormExportType = {
    email: string
    password: string
    rememberMe: boolean
}

 export const LoginForm: React.FC<InjectedFormProps<FormExportType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'email'} component={'input'}/>
            </div>
            <div>
                <Field name={'password'} placeholder={'password'} component={'input'} type={'password'}/>
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

 const Login = (props:any) => {
    const onSubmit = (formData: FormExportType) => {
        props.logIn(formData.email,formData.password,formData.rememberMe)
    }
    if (props.isAuth){
       return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginRedaxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{logIn})(Login)

