import React, {useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, StateType} from "../../redux/types";


type MyPostsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}


const MyPosts = (props: MyPostsType) => {

    let postsElement = props.posts.map((p) => <Post message={p.title} like={p.like}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if(newPostElement.current !== null){  let text = newPostElement.current?.value
            props.addPost(text)}

    }

        return <div>
            <div>
                My posts
            </div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post
            </button>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

}
export default MyPosts