import React, {useEffect, useState} from "react";
import {Contact} from "./Contact";
import s from './ProfileData.module.scss'
import {saveProfileTC} from "../../redux/profileData-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type  ProfileDataType = {
    profile: profileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData = (props: ProfileDataType) => {
    let [openClose, setOpenClose] = useState(false)
    const profile = useSelector<AppStateType, profileType>(state => state.profileData.profile)
    const dispatch = useDispatch();
    const changeOC = () => {
        setOpenClose(!openClose)
    }
    useEffect(() => {
        dispatch(saveProfileTC(profile));

        // setTimeout( () => {
        //     dispatch(getUserProfile(profile.userId))
        // }, 2000)

    }, [profile])

    return <div className={s.wrapper}>
        <div className={s.top}>
            <div className={s.fat}><span className={s.left}>Full name : </span><span
                className={s.right}>{props.profile.fullName}</span></div>
            <div className={s.fat}><span className={s.left}>Loking for job :  </span><span
                className={s.right}>{props.profile.lookingForAJob ? 'yes' : 'No'}</span></div>
            {props.profile.lookingForAJob ?
                <div className={s.fat}><span className={s.left}>My professionals skiils : </span><span
                    className={s.right}>{props.profile.lookingForAJobDescription}
                </span></div> : ''}
            <div className={s.fat}><span className={s.left}>About me : </span><span
                className={s.right}>{props.profile.aboutMe}</span></div>
            {props.isOwner ? <button className={s.refBut} onClick={props.goToEditMode}>Edit</button> : ''}</div>
        <div className={s.bottom}>
            <div className={s.fat}>
                <span className={s.Contact} onClick={() => changeOC()}>Contacts :</span>
                {openClose ? (<span className={s.simpleContacts}>{
                    Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                    })}</span>) : '...'}
            </div>
        </div>


    </div>

}

type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: any
    aboutMe: string

}