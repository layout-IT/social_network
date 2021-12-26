import React from "react";
import s from "./Header/Header.module.scss";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {logOut} from "./redux/auth-reducer";
import {AppStateType} from "./redux/redux-store";


function LogLogout(){
    let isAuth = useSelector<AppStateType,boolean>(state =>state.auth.isAuth )
    let login = useSelector<AppStateType,string>(state =>state.auth.login)
    return       <div className={s.loginBlock}>
        {isAuth ? <div>{login} - <button onClick={logOut}>logOut</button></div> :
            <NavLink className={s.login} to={'/login'}>login</NavLink>}

    </div>
}

export default LogLogout