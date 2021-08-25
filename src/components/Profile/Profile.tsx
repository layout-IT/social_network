import React from 'react';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/types";
import {ActionsTypes} from "../redux/state";

type profileType ={
    profilePage:ProfilePageType
    dispatch: (action: ActionsTypes) => void
}



const Profile = (props: profileType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText ={props.profilePage.newPostText}
                 dispatch={props.dispatch}

        />
    </div>


}

export default Profile