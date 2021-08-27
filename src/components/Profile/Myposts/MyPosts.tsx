import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../redux/types";


type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
 //   dispatch: any
    updateNewPostText:(text:string)=> void
    addPost:()=> void
}


const MyPosts = (props: MyPostsType) => {

    let postsElement = props.posts.map((p) => <Post key={p.id} message={p.title} like={p.like}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        props.addPost()
        //props.dispatch(addPostActionCreator(props.newPostText))
    }
    let onPostChange = () => {

        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)

        }

    }
    return <div>
        <div>
            My posts
        </div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={onAddPost}>Add post</button>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>

}
export default MyPosts