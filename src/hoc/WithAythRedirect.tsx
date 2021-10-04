import React, {ComponentType} from 'react'
import {Redirect} from "react-router-dom";
import {AppStateType} from "../components/redux/redux-store";
import {connect} from "react-redux";

type mapStatetoPropsForRedirectType = {
    isAuth: boolean
}
let mapStatetoPropsForRedirect = (state: AppStateType): mapStatetoPropsForRedirectType => ({
    isAuth: state.auth.isAuth,
})

export function  withAythRedirect<T>(Component: ComponentType<T>){
    function RedirectComponent(props:mapStatetoPropsForRedirectType) {
        let {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStatetoPropsForRedirect)(RedirectComponent)


    return ConnectedAuthRedirectComponent
}