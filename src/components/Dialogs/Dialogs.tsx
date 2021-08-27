import React from 'react';
import s from './Dialogs.module.css'
import DialigItem from "./DialogItem/DialogsItem";
import {DialogsType, MessagesType} from '../redux/types';
import {ActionsTypes} from "../redux/store";
import {SendMessageAC, updateNewMassageBodyAC} from "../redux/dialogs-reducer";


function Message(props: MessageType) {
    return <div className={s.message}>{props.title}</div>
}

type MessageType = {
    title: string
}


type DialogsPropsType = {
    updateNewMassageBody: (body:any) => void
    SendMessage:() => void
    messages: Array<MessagesType>
     dialogs: Array<DialogsType>
     newMessageBody: string



}


export function Dialogs(props: DialogsPropsType) {
    let dialogsElement = props.dialogs.map(d => <DialigItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message title={m.title}/>)
    let newMessageBody = props.newMessageBody
    let onSendMassageClick = () => {
        props.SendMessage()
    }

    let onNewMassageChange = (e: any) => {
        let body = e.currentTarget.value
        props.updateNewMassageBody(body)
    }

    return <div className={s.dialogs}>
        <div className={s.dialogs__items}>
            {dialogsElement}

        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
                <textarea placeholder={'Enter something'} onChange={onNewMassageChange}
                          value={newMessageBody}> </textarea>
                <button onClick={onSendMassageClick}>Send</button>
            </div>

        </div>
    </div>
}