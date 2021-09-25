import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/preloader";

type ProfileInfoType={
    profile:any
}

const ProfileInfo = (props: ProfileInfoType) => {
    debugger
    if (!props.profile){
        return <Preloader/>
    }

    return <div>
        <div className={s.picture}>
            <img src="https://ru-wallp.com/w/2010/5/26/1398401274727650902.png" alt="ptcture"/>
        </div>
        <div>
            ava + description
        </div>
    </div>

}
    export default ProfileInfo