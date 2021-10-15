import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PropsMType} from "./MyPostsContainer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

const AddNewPostForm :React.FC<InjectedFormProps>= (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText'  component='textarea' />
            <button >Add post</button>
        </form>
    )
}

export const AddNewPostReduxForm = reduxForm({
    form:'ProfileAddNewPostForm'
})(AddNewPostForm)

const MyPosts = (props: PropsMType) => {

    let postsElement = props.posts.map((p) => <Post key={p.id} message={p.title} like={p.like}/>);
//    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = (values:any) => {
        props.addPost(values.newPostText)

    }

    return <div>
        <div>
            My posts
        </div>
      <AddNewPostReduxForm onSubmit={onAddPost}  />
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>

}



export default MyPosts