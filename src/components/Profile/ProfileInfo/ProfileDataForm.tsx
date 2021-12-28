import React, {ChangeEvent, useEffect, useState} from "react";
import s from './ProfileDataForm.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {saveProfileAC, saveProfileTC} from "../../redux/profileData-reducer";
import {AppStateType} from "../../redux/redux-store";
import {profileType} from "../../../API/Api";

type propsType ={
    goToEditMode: ()=> void
}
export const ProfileDataForm = (props:propsType) => {
    const [fullName, setFullName] = useState('')
    const [lookingFJ, setLookingFJ] = useState(false)
    const [profScills, setProffScills] = useState('')
    const [aboutMe, setAboutMe] = useState('')
    const profile = useSelector<AppStateType,profileType>(state => state.profileData.profile)
    const dispatch = useDispatch()
    const goToEdit = () => {
        dispatch(saveProfileAC(fullName, lookingFJ, profScills, aboutMe))

        // dispatch(saveProfileTC({fullName, lookingFJ, profScills, aboutMe}))
        props.goToEditMode()
    }
    useEffect(() => {
    }, [profile])
    console.log(profile)
    const changeFullName = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.currentTarget.value)
    }
    const changeLookingFJ = (e: ChangeEvent<HTMLInputElement>) => {
        setLookingFJ(e.currentTarget.checked)
    }
    const changeProfScills = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setProffScills(e.currentTarget.value)
    }
    const changeAboutMe = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAboutMe(e.currentTarget.value)
    }

    return <div className={s.wrapper}>

        <div className={s.refactorContainer}>
            <div className={s.name}>full name:</div>
            <div className={s.description}><input onChange={changeFullName} value={fullName} type="text"
                                                  placeholder={'full name'}/></div>

        </div>
        <div className={s.refactorContainer}>
            <div className={s.name}>Loking for job :</div>
            <div className={s.description}><input onChange={changeLookingFJ} checked={lookingFJ} type={'checkbox'}/>
            </div>

        </div>
        <div className={s.refactorContainer}>
            <div className={s.name}>My professionals skiils :</div>
            <div className={s.description}><textarea value={profScills} onChange={changeProfScills}
                                                     placeholder={'My professionals skiils'}></textarea></div>

        </div>
        <div className={s.refactorContainer}>
            <div className={s.name}> About me :</div>
            <div className={s.description}><textarea value={aboutMe} onChange={changeAboutMe}
                                                     placeholder={'About me'}></textarea></div>
            <button onClick={()=>goToEdit()}> save</button>
        </div>

    </div>

}