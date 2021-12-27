import React from "react";
import s from './ProfileDataForm.module.scss'

const goToEditMode = () => {

}

export const ProfileDataForm = () => {
    return <div className={s.wrapper}>

        <div className={s.refactorContainer}>
            <div className={s.name}>full name:</div>
            <div className={s.description}><input type="text" placeholder={'full name'}/></div>

        </div>
        <div className={s.refactorContainer}>
            <div className={s.name}>Loking for job :</div>
            <div className={s.description}><input type={'checkbox'}/></div>

        </div>
        <div className={s.refactorContainer}>
            <div className={s.name}>My professionals skiils :</div>
            <div className={s.description}><textarea placeholder={'My professionals skiils'}></textarea></div>

        </div>
        <div className={s.refactorContainer}>
            <div className={s.name}> About me :</div>
            <div className={s.description}><textarea placeholder={'About me'}></textarea></div>
            <button onClick={goToEditMode}> save</button>
        </div>

    </div>

}