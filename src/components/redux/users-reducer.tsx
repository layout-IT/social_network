import React from "react";

export type followCreatorType = ReturnType<typeof followAC>
export type unFollowCreatorType = ReturnType<typeof unFollowAC>
export type setUserCreatorType = ReturnType<typeof setUsersAC>


const initialState = {
    users: [
        // {id: 1, photoUrl: 'https://vraki.net/sites/default/files/inline/images/10_342.jpg', followed: false, fullname: 'Albert', status: 'Everyone called me kind and sweet when I was a child… so they jinxed it', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoUrl: 'https://oir.mobi/uploads/posts/2020-01/1579144441_18-24.jpg', followed: true, fullname: 'Sasha', status: 'I am a very creative person — I want to create, I want to get up!', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoUrl: 'https://cache3.youla.io/files/images/780_780/5c/1f/5c1f68cdf235029ffe3b35c9.jpg', followed: true, fullname: 'Dima', status: 'I have a non-aggression pact with my conscience: it doesn\'t bite me — I don\'t have it.', location: {city: 'Kazan', country: 'Russia'}},
        // {id: 4, photoUrl: 'https://yt3.ggpht.com/a/AGF-l79j4KYiiDnMsj5AY5MuxckEXkt-paWzFE4Tcg=s900-c-k-c0xffffffff-no-rj-mo',  followed: false, fullname: 'Dasha', status: 'To hell, me? And the devils-what did they do to you?', location: {city: 'N-N', country: 'Russia'}},
    ]
}

export type UsersType = {
    id: number
    followed: boolean
    fullname: string
    location: locationType
    status: string
    photoUrl: string

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