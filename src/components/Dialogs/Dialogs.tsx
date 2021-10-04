import React from 'react';
import s from './Dialogs.module.css'
import DialigItem from "./DialogItem/DialogsItem";
import {DialogsPropsType} from "./Dialogs-container";
import { Redirect } from 'react-router-dom';

function Message(props: MessageType) {
    return <div className={s.message}>{props.title}</div>
}

type MessageType = {
    title: string
}



export function Dialogs(props: DialogsPropsType) {
    let dialogsElement = props.dialogs.map(d => <DialigItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} title={m.title}/>)
    let newMessageBody = props.newMessageBody
    let onSendMassageClick = () => {
        props.SendMessage()
    }

    let onNewMassageChange = (e: any) => {
        let body = e.currentTarget.value
        props.updateNewMassageBody(body)
    }

        if(props.isAuth === false){
            return <Redirect to={"/login"}/>


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