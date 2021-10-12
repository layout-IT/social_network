import {newPostTextType} from "./dialogs-reducer";
import {profileAPI, usersAPI} from "../../API/Api";


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostActionTYpe = ReturnType<typeof updateNewPostActionCreator>
export type setUserProfileTYpe = ReturnType<typeof setUserProfile>
export type setStatusTYpe = ReturnType<typeof setStatus>

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: newPostTextType
    profile: any
    status:string
}

export type PostType = {
    id: number
    title: string
    like: number
}


 let initialState = {
    posts:
        [
            {id: 1, title: 'hi, how are you', like: 12},
            {id: 2, title: 'it`s my first post', like: 15}
        ],
    newPostText: 'it.comm',
    profile: null,
     status:''
}



const profileReducer = (state: ProfilePageType = initialState, action: AddPostActionType | UpdateNewPostActionTYpe|setUserProfileTYpe|setStatusTYpe ): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost:
                PostType = {
                id: new Date().getTime(),
                title: action.newPostText,
                like: new Date().getTime(),
            };
            return{...state,posts : [...state.posts, newPost],newPostText : ''};
        }

        case 'UPDATE-NEW-TEXT' :
            return  {...state,newPostText : action.newText}
        case 'SET-STATUS' :
            return  {...state,status : action.status}

        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
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

export const setUserProfile = (profile : any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const setStatus = (status : string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}


export const getUserProfile = (userId : number) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getUserStatus = (userId : number) => (dispatch: any) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateUserStatus = (status : string) => (dispatch: any) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
    })
}
export default profileReducer;