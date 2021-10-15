import { addPostActionCreator, PostType} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";



type mapStateToPropsType = {
    posts: Array<PostType>

}

type mapMDispatchToPropsType = {
    addPost: (newPostText: string) => void

}

export type PropsMType = mapStateToPropsType & mapMDispatchToPropsType


let mapDispatchToProps = (dispatch: Dispatch): mapMDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        },

    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,

    }

}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)