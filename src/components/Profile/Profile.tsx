import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type ProfileType = {
    profile: any
    status:string
    updateStatus:any
}

const Profile = (props: ProfileType) => {
    let isAuth = useSelector<AppStateType,boolean>(state =>state.auth.isAuth )
    console.log(isAuth)
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>

        <MyPostsContainer/>
    </div>

}

export default Profile