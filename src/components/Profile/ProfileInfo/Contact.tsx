import React from "react";
import s from './contact.module.css'

type contactTitleType ={
    contactTitle : string
    contactValue: string
}

export const Contact = (props:contactTitleType) => {
    return <div>
        <div className={s.fat}>{props.contactTitle}</div>
        <div className={s.fat}>{props.contactValue}</div>
    </div>
}