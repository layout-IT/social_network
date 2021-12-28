import {Dispatch} from "redux";
import {profileAPI, profileType} from "../../API/Api";
import {getUserProfile} from "./profile-reducer";


export type initialStateType = typeof initialState
let initialState = {
    profile: {
        aboutMe: '',
        userId: 18971,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: null,
            large: null,
        },
    }
}


export const profileDataReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case "SAVE-PROFILE":
            return {...state, profile: {
                ...state.profile, aboutMe: action.payload.aboutMe,
                    fullName: action.payload.fullName,lookingForAJob : action.payload.lookingForAJob,
                    lookingForAJobDescription : action.payload.lookingForAJobDescription
            } }
        default:
            return state;
    }
}
export const saveProfileAC = (fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, aboutMe: string) => {
    return {
        type: 'SAVE-PROFILE',
        payload: {
            fullName,
            lookingForAJob,
            lookingForAJobDescription,
            aboutMe
        }
    } as const
}

export const saveProfileTC = (profile: any) => (dispatch: any, getState: any) => {
    const state = getState().profileData.profile;
    // const profile1 = {
    //     ...state, aboutMe: profile.aboutMe,
    //     fullName: profile.fullName,lookingForAJob : profile.lookingFJ,
    //     lookingForAJobDescription : profile.profScills
    //
    // }
    return profileAPI.saveProfile(profile)
        .then(res => {
            dispatch(getUserProfile(state.userId))
        })
}

export type actionType = ReturnType<typeof saveProfileAC>

// aboutMe: null,
// userId: null,
// lookingForAJob: null,
// lookingForAJobDescription: null,
// fullName: null,
// contacts: {
//     github:  null,
//     vk:  null,
//     facebook:  null,
//     instagram:  null,
//     twitter:  null,
//     website:  null,
//     youtube:  null,
//     mainLink:  null,
// },
// photos: {
//     small: null,
//     large: null,
// },