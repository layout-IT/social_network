import React from 'react';
import s from './Dialogs.module.scss'
import {DialogsPropsType} from "./DialogsContainer";
import {NavLink, Redirect} from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

function Message (props: MessageType) {
    return <div className={s.message}>{props.title}</div>
}

type MessageType = {
    title: string
}


export function Dialogs (props: DialogsPropsType) {
    // let dialogsElement = props.dialogs.map(d => <DialigItem key={d.id} name={d.name} id={d.id}/>)
    // let messagesElements = props.messages.map(m => <Message key={m.id} title={m.title}/>)

    let addNewMessage = (values: any) => {
        props.SendMessage(values.newMessageBody)
    }

    if (props.isAuth === false) {
        return <Redirect to={"/login"}/>
    }

    return <div className={s.dialogsContainer}>

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.wrapperDialogs}>
                    <img src="https://www.abidincaodds.com/wp-content/uploads/2020/04/routine.png" alt="photo"/>

                    <div className={s.dialogPS} >
                        <div className={s.dialogs__items}>Petr</div>
                        <div className={s.messages}>Сool dude</div>
                    </div>
                </div>
                <div>10 Dec</div>
            </div>
            <div className={s.dialogItem}>
                <div className={s.wrapperDialogs}>
                    <img src="https://cont.ws/uploads/pic/2019/12/%D1%83%20%2820%29.png" alt="photo"/>

                    <div className={s.dialogPS} >
                        <div className={s.dialogs__items}>Lisa</div>
                        <div className={s.messages}>Hello. How are you?</div>
                    </div>
                </div>
                <div>24 Nov</div>
            </div>
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
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