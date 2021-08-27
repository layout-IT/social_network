import React from 'react';
import {PostType} from "../../redux/types";
import {updateNewPostActionCreator,addPostActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsContaiberType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: any
}


export const MyPostsContainer = (props: MyPostsContaiberType) => {

    // let postsElement = props.posts.map((p) => <Post key={p.id} message={p.title} like={p.like}/>);
    // let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText))
    }
    let onPostChange = (text: string) => {
        //   if (newPostElement.current !== null) {
        let action = updateNewPostActionCreator(text)
        props.dispatch(action)

        //     }

    }
    return (<MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={props.posts}
        newPostText={props.newPostText}/>)

}
export default MyPostsContainer