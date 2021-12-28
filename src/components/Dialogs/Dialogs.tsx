import React from 'react';
import s from './Dialogs.module.scss'
import {DialogsPropsType} from "./DialogsContainer";
import {NavLink, Redirect} from 'react-router-dom';

function Message (props: MessageType) {
    return <div className={s.message}>{props.title}</div>
}

type MessageType = {
    title: string
}


export function Dialogs (props: DialogsPropsType) {
    if (props.isAuth === false) {
        return <Redirect to={"/login"}/>
    }

    return <div className={s.dialogsContainer}>

        <div className={s.dialogs}>
            <NavLink to={'/message'} className={s.dialogItem}>
                <div className={s.wrapperDialogs}>
                    <img src="https://www.abidincaodds.com/wp-content/uploads/2020/04/routine.png" alt="photo"/>

                    <div className={s.dialogPS} >
                        <div className={s.dialogs__items}>Petr</div>
                        <div className={s.messages}>Сool dude</div>
                    </div>
                </div>
                <div className={s.date}>10 Dec</div>
            </NavLink>
            <NavLink to={'/message'} className={s.dialogItem}>
                <div className={s.wrapperDialogs}>
                    <img src="https://cont.ws/uploads/pic/2019/12/%D1%83%20%2820%29.png" alt="photo"/>

                    <div className={s.dialogPS} >
                        <div className={s.dialogs__items}>Lisa</div>
                        <div className={s.messages}>Hello. How are you?</div>
                    </div>
                </div>
                <div className={s.date}>24 Nov</div>
            </NavLink>
        </div>
    </div>
}
