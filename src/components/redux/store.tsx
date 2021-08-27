import {StateType} from "./types";
import {rerenderIntireTree} from "../../index";
import profileReducer, {AddPostActionType, UpdateNewPostActionTYpe} from "./profile-reducer";
import dialogsReducer, {UpdateNewMassageBodyCreatorType, SendMessageCreatorType} from "./dialogs-reducer";
import sidebareducer from "./sidebar-reducer";

export type StoreType = {
    _state: StateType
    getstate: () => StateType
    _collsubscriber: (state: StateType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
};

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostActionTYpe
    | UpdateNewMassageBodyCreatorType
    | SendMessageCreatorType

export let store: StoreType = {

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
                {id: 3, title: 'YoO'},
                {id: 4, title: 'Сool dude'}
            ],
            dialogs: [
                {id: 1, name: 'Petr'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Oleg'},
                {id: 4, name: 'Victor'}
            ],
            newMessageBody: ''
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
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        sidebareducer(this._state.sideBar, action)
        this._collsubscriber(this._state)
         // rerenderIntireTree(this.getstate())
    },
};


export default store;
