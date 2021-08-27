import React from 'react';
import {DialogsType, MessagesType} from '../redux/types';
import {ActionsTypes} from "../redux/store";
import {SendMessageAC, updateNewMassageBodyAC} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";




type DialogsContainerPropsType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void

}


export function DialogsContainer(props: DialogsContainerPropsType) {
    // let dialogsElement = props.dialogs.map(d => <DialigItem name={d.name} id={d.id}/>)
    // let messagesElements = props.messages.map(m => <Message title={m.title}/>)
    // let newMessageBody = props.newMessageBody
    let onSendMassageClick = () => {
        props.dispatch(SendMessageAC())
    }

    let onNewMassageChange = (body:any) => {
        props.dispatch(updateNewMassageBodyAC(body))
    }

    return <Dialogs
        updateNewMassageBody={onNewMassageChange}
        SendMessage={onSendMassageClick}
        dialogs={props.dialogs}
        messages={props.messages}
        newMessageBody={props.newMessageBody}


    />
}