import {profileAPI, usersAPI} from "../../API/Api";


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type setUserProfileTYpe = ReturnType<typeof setUserProfile>
export type setStatusTYpe = ReturnType<typeof setStatus>
export type delPostTYpe = ReturnType<typeof delPost>

export type ProfilePageType = {
    posts: Array<PostType>
    profile: any
    status: string
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
    profile: null,
    status: ''
}


const profileReducer = (state: ProfilePageType = initialState, action: AddPostActionType | setUserProfileTYpe | setStatusTYpe | delPostTYpe): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost:
                PostType = {
                id: new Date().getTime(),
                title: action.newPostText,
                like: new Date().getTime(),
            };
            return {...state, posts: [...state.posts, newPost]};
        }

        case 'SET-STATUS' :
            return {...state, status: action.status}

        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}


        case 'DEL-POST':
            return {...state, posts: [...state.posts].filter(f => f.id !== action.id)}


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


export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}

export const delPost = (id: number) => {
    return {
        type: 'DEL-POST',
        id
    } as const
}

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export default profileReducer;