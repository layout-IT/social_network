import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/preloader";

type ProfileInfoType={
    profile:any
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile){
        return <Preloader/>
    }

    return <div>
        <div className={s.picture}>
            <img src={props.profile.photos.large} alt="ptcture"/>
        </div>
        <div>
            ava + description
        </div>
    </div>

}
    export default ProfileInfo