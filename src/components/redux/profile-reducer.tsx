import {PostType, ProfilePageType} from "./types";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostActionTYpe = ReturnType<typeof updateNewPostActionCreator>

let initialState ={
    posts:
        [
            {id: 1, title: 'hi, how are you', like: 12},
            {id: 2, title: 'it`s my first post', like: 15}
        ],
    newPostText: 'it.comm'
}

const profileReducer = (state: ProfilePageType = initialState , action: AddPostActionType | UpdateNewPostActionTYpe) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: new Date().getTime(),
                title: action.newPostText,
                like: new Date().getTime(),
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case 'UPDATE-NEW-TEXT' :
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText
    } as const
}

export const updateNewPostActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-TEXT',
        newText
    } as const
}
export default profileReducer;