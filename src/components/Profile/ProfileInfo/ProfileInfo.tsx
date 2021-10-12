import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: any
    status:string
    updateStatus:any
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        <div className={s.picture}>
            <img src={props.profile.photos.large} alt="ptcture"/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>

}
export default ProfileInfo