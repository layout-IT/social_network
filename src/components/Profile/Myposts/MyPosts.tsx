import React from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import {PropsMType} from "./MyPostsContainer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

const AddNewPostForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.textareaContainer}>
            <Field name='newPostText' component='textarea' className={s.textarea} placeholder={'add your message...'}/>

            <button className={s.textAreaButton}>Add post</button>
        </form>
    )
}

export const AddNewPostReduxForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

const MyPosts = React.memo((props: PropsMType) => {
    let postsElement = props.posts.map((p) => <Post key={p.id} message={p.title} like={p.like}/>);
//   let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)

    }

    return <div className={s.wrapperCntainer}>
        <h2 className={s.title}>Add you post</h2>
        <div className={s.posts}>
            {postsElement}
        </div>
        <div className={s.myPost}>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
        </div>


    </div>

})


export default MyPosts