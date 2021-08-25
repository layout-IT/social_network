import {PostType, StateType} from "./types";
import {rerenderIntireTree} from "../../index";


// const ADD_POST = 'ADD-Post'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type StoreType = {
    _state: StateType
    getstate: () => StateType
    _collsubscriber: (state: StateType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export type UpdateNewPostActionCreatorTYpe = ReturnType<typeof updateNewPostActionCreator>

export type ActionsTypes = AddPostActionType | UpdateNewPostActionCreatorTYpe

let store: StoreType = {
    _state: {
        profilePage: {
            posts:
                [
                    {id: 1, title: 'hi, how are you', like: 12},
                    {id: 2, title: 'it`s my first post', like: 15}
                ],
            newPostText: 'it.comm'
        },
        dialogsPage: {
            messages: [
                {id: 1, title: 'hi'},
                {id: 2, title: 'How is yor it kamasutra?'},
                {id: 3, title: 'YoO'}
            ],
            dialogs: [
                {id: 1, name: 'Petr'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Oleg'},
                {id: 4, name: 'Victor'}
            ],


        },
        sideBar: {}

    },
    getstate() {
        return this._state
    },
    _collsubscriber(state: StateType) {

    },

    subscribe(observer: () => void) {
        store._collsubscriber = observer
    },
    dispatch(action: any) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: new Date().getTime(),
                title: action.newPostText,
                like: 0

            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._collsubscriber(this._state)

        } else if (action.type === 'UPDATE-NEW-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._collsubscriber(this._state)
        }
        rerenderIntireTree(this.getstate())
    },
}
export const addPostActionCreator = (newPostText : string) => {
    return {
        type : 'ADD-POST',
        newPostText
    } as const
}

export const updateNewPostActionCreator = (newText: string)=> {
    return{
        type: 'UPDATE-NEW-TEXT',
        newText
    } as const
}


export default store
