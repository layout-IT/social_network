import React from "react";
import {Contact} from "./Contact";
import s from './contact.module.css'

type  ProfileDataType={
    profile:profileType
    isOwner:boolean
    goToEditMode: () => void
}


export const ProfileData = (props: ProfileDataType) => {
    return    <div>
        {props.isOwner ? <button onClick={props.goToEditMode}>Refactor</button>:''}
        <div className={s.fat}>Full name : <span className={s.simple}>{props.profile.fullName}</span> </div>
        <div className={s.fat}>Loking for job : <span className={s.simple}>{props.profile.lookingForAJob ? 'yes' : 'No'}</span></div>
        {props.profile.lookingForAJob ?
            <div className={s.fat}>My professionals skiils : <span className={s.simple}>{props.profile.lookingForAJobDescription}
                </span></div> :
            ''
        }
        <div className={s.fat}>About me : <span className={s.simple}>{props.profile.aboutMe}</span></div>

        <div className={s.fat}>Contacts : <span className={s.simpleContacts}>{Object.keys(props.profile.contacts).map(key =>{
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        } )}</span></div>
    </div>

}

type profileType={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: any
    aboutMe:string

}

// type contactType={
//     github: string
//     vk: string
//     facebook: string
//     instagram: string
//     twitter: string
//     website: string
//     youtube: string
//     mainLink: string
// }