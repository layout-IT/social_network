import React from 'react';
import s from './Dialogs.module.css'
import DialigItem from "./DialogItem/DialogsItem";
import {DialogsPropsType} from "./Dialogs-container";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm, InjectedFormProps} from "redux-form";

function Message(props: MessageType) {
    return <div className={s.message}>{props.title}</div>
}

type MessageType = {
    title: string
}


export function Dialogs(props: DialogsPropsType) {
    let dialogsElement = props.dialogs.map(d => <DialigItem key={d.id} name={d.name} id={d.id}/>)
    debugger
    let messagesElements = props.messages.map(m => <Message key={m.id} title={m.title}/>)

    let addNewMessage = (values: any) => {
        props.SendMessage(values.newMessageBody)
    }

    if (props.isAuth === false) {
        return <Redirect to={"/login"}/>


    }

    return <div className={s.dialogs}>
        <div className={s.dialogs__items}>
            {dialogsElement}

        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    </div>
}


const AddMessageForm: React.FC<InjectedFormProps> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component='textarea' placeholder='Enter something' name='newMessageBody'> </Field>
        <button>Send</button>
    </form>
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)