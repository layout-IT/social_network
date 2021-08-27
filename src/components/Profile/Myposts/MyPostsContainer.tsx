import {updateNewPostActionCreator, addPostActionCreator, PostType} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

// type MyPostsContaiberType = {
//     posts: Array<PostType>
//     newPostText: string
//     dispatch: any
// }


// export const MyPostsContainer = (props: MyPostsContaiberType) => {
//
//     // let postsElement = props.posts.map((p) => <Post key={p.id} message={p.title} like={p.like}/>);
//     // let newPostElement = React.createRef<HTMLTextAreaElement>()
//
//     let addPost = () => {
//         props.dispatch(addPostActionCreator(props.newPostText))
//     }
//     let onPostChange = (text: string) => {
//         //   if (newPostElement.current !== null) {
//         let action = updateNewPostActionCreator(text)
//         props.dispatch(action)
//
//         //     }
//
//     }
//     return (<MyPosts
//         updateNewPostText={onPostChange}
//         addPost={addPost}
//         posts={props.posts}
//         newPostText={props.newPostText}/>)
//
// }
// export default MyPostsContainer

type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

type mapMDispatchToPropsType = {
    addPost: (newPostText: string) => void
    onPostChange: (text: string) => void
}

export type PropsMType = mapStateToPropsType & mapMDispatchToPropsType


let mapDispatchToProps = (dispatch: Dispatch): mapMDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        },
        onPostChange: (text: string) => {
            //   if (newPostElement.current !== null) {
            let action = updateNewPostActionCreator(text)
            dispatch(action)
        }
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }

}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)