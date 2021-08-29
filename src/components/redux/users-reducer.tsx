import React from "react";

export type followCreatorType = ReturnType<typeof followAC>
export type unFollowCreatorType = ReturnType<typeof unFollowAC>
export type setUserCreatorType = ReturnType<typeof setUsersAC>


const initialState = { users: []}

export type UsersType = {
    id: number
    followed: boolean
    name: string
    //location: locationType
    status: string
    photos: photosType

}

export type photosType = {
    small : string
    large : string
}

export type locationType = {
    city: string
    country: string
}
export type initialStateType = {
    users: UsersType[]
}

const usersReducer = (state: initialStateType = initialState, action: followCreatorType | unFollowCreatorType | setUserCreatorType) => {
    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map((m) => {
                        if (m.id === action.userId) {
                            return {...m, followed: true}
                        }
                        return m;
                    }
                )
            }

        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map((m) => {
                        if (m.id === action.userId) {
                            return {...m, followed: false}
                        }
                        return m;
                    }
                )
            }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }


        default:
            return state
    }
}


export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId,

    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId,
    } as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}

export default usersReducer