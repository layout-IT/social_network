import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../redux/types";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/state";





type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch:any
}



const MyPosts = (props: MyPostsType) => {

    let postsElement = props.posts.map((p) => <Post key={p.id}  message={p.title} like={p.like}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText))
    }
    let onPostChange = () => {

        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            let action = updateNewPostActionCreator(text)
            props.dispatch(action)

        }

    }
    return <div>
        <div>
            My posts
        </div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={addPost}>Add post </button>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>

}
export default MyPosts