import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PropsMType} from "./MyPostsContainer";


// type MyPostsType = {
//     posts: Array<PostType>
//     newPostText: string
//  //   dispatch: any
//     updateNewPostText:(text:string)=> void
//     addPost:()=> void
// }


const MyPosts = (props: PropsMType) => {

    let postsElement = props.posts.map((p) => <Post key={p.id} message={p.title} like={p.like}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
       // props.addPost()
        //props.dispatch(addPostActionCreator(props.newPostText))
         props.addPost(props.newPostText)

    }
    let onPostChange = () => {

        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            props.onPostChange(text)

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