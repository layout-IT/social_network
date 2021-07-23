import React from 'react';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props: any) => {


    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 addPost={props.addPost}
        />
    </div>


}

export default Profile