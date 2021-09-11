import React from 'react';
import s from './../Dialogs.module.css'




function Message(props: MessageType) {
    return <div className={s.message}>{props.title}</div>

    let messages = [{id: 1, title: 'hi'},
        {id: 2, title: 'How is yor it kamasutra?'},
        {id: 3, title: 'YoO'}]

}

type MessageType = {
    title: string
}

export default Message