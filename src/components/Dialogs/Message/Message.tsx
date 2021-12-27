import React, {ChangeEvent} from "react";
import {NavLink} from "react-router-dom";
import s from './Message.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {MessagesType, SendMessageAC} from "../../redux/dialogs-reducer";
import {useState} from "react";


function Message () {
    const messages = useSelector<AppStateType, MessagesType[]>(state => state.dialogsPage.messages)
    const dispatch = useDispatch()
    let [value, setValue] = useState('')

    let valueChange = (e: ChangeEvent<HTMLInputElement>) => {

        setValue(e.currentTarget.value)
    }
    const addMessage = () => {
        dispatch(SendMessageAC(value))
        setValue('')
    }


    return <div className={s.wrapper}>
        <div className={s.header}>
            <NavLink to={'/Dialogs'} className={s.back}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                     className="svg-inline--fa fa-chevron-left fa-w-10 fa-2x">
                    <path fill="currentColor"
                          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                          className=""></path>
                </svg>
                <p>Back</p>
            </NavLink>
        </div>
        <div className={s.main}>
            <div className={s.data}>
                <div className={s.hours}></div>
            </div>
            <div className={s.text}> {messages.map(messages => <div>
                <div className={s.messageField}><span className={s.mapTime}>{messages.id}</span><span className={s.mapText}>{messages.title}</span></div>
            </div>)}</div>
        </div>
        <div className={s.footer}>

            <input type="text" onChange={valueChange} value={value} placeholder={'Write a message...'}/>
            <button onClick={() => addMessage()}>Send</button>
        </div>
    </div>
}

export default Message