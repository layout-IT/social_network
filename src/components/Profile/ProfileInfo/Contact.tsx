import React from "react";
import s from './contact.module.scss'

type contactTitleType ={
    contactTitle : string
    contactValue: string
}

export const Contact = (props:contactTitleType) => {
    return <div className={s.wraper}>
        <div className={s.fatT}>{props.contactTitle}:</div>
        <div className={s.fatV}>{props.contactValue}</div>
    </div>
}