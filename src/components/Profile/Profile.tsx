import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";

type profileType = {
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsTypes) => void

}

const Profile = (props: profileType) => {
    return <div>
        <ProfileInfo/>

        <MyPostsContainer
            // posts={props.profilePage.posts}
            //      newPostText={props.profilePage.newPostText}
            //      dispatch={props.dispatch}
        />
    </div>

}

export default Profile