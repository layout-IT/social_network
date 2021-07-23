import React from 'react';
import s from './Dialogs.module.css'
import DialigItem from "./DialogItem/DialogsItem";
import {DialogsType, MessagesType} from '../redux/types';




function Message(props: MessageType) {
    return <div className={s.message}>{props.title}</div>
}

type MessageType = {
    title: string
}

// type DialogsPropsType = {
//     messages: Array<MessagesType>
//     dialogs: Array<DialogsType>
// }

type DialogsPropsType={
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}



export function Dialogs(props:DialogsPropsType ) {
debugger
    let dialogsElement = props.dialogs.map( d => <DialigItem name= {d.name}  id= {d.id}  /> )
    let messagesElements = props.messages.map( m => <Message title={m.title}/>)


    return <div className={s.dialogs}>
        <div className={s.dialogs__items}>
            {dialogsElement}

        </div>
        <div className={s.messages}>
            {messagesElements}

        </div>
    </div>
}