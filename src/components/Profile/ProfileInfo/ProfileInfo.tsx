import React, {useState} from 'react';
import s from './ProfileInfo.module.scss'
import {Preloader} from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import userImg from "../../../assets/images/c3224969bcc3648eb22ca478989fcfbb--mr-robot-robots.jpg";
import {ProfileData} from './ProfileData';
import {ProfileDataForm} from "./ProfileDataForm";

type ProfileInfoType = {
    profile: any
    status: string
    updateStatus: any
}

const ProfileInfo = (props: ProfileInfoType) => {
    let [editMode, setEditMode] = useState(false)
    let [isOwner, setIsOwner] = useState(true)
    if (!props.profile) {
        return <Preloader/>
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    return <div className={s.wrapper}>
        <div className={s.picture}>
            <div className={s.pictureContainer}><img
                src={props.profile.photos.large ? props.profile.photos.large : userImg} alt="ptcture"/>
                <div className={s.infoSide}><ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    {editMode ? <ProfileDataForm/> : <ProfileData profile={props.profile}
                                                                  isOwner={isOwner}
                                                                  goToEditMode={goToEditMode}/>
                    }
                </div>

            </div>


        </div>
    </div>

}
export default ProfileInfo

