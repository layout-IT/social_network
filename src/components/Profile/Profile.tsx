import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {Redirect} from "react-router-dom";

type ProfileType = {
    profile: any
}

const Profile = (props: ProfileType) => {

    return <div>
        <ProfileInfo profile={props.profile}/>

        <MyPostsContainer/>
    </div>

}

export default Profile