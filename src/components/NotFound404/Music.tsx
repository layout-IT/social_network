import React from "react";
import s from './Common.module.scss'
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";

function Musik () {
    const isauth = useSelector<AppStateType,boolean>(state => state.auth.isAuth)
    if(!isauth){
        return <Redirect to={"/login"}/>
    }
    return <div className={s.wrapper}>
        <div className={s.imgContainer}>
            <img src="https://www.micromux.com/wp-content/uploads/2020/02/404-error-image.jpg?w=640" alt="404"/>
        </div>
    </div>
}

export default Musik