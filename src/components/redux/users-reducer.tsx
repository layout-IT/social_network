export type followCreatorType = ReturnType<typeof followAC>
export type unFollowCreatorType = ReturnType<typeof unFollowAC>
export type setUserCreatorType = ReturnType<typeof setUsersAC>
export type setCurrentPageAType = ReturnType<typeof setCurrentPageAC>
export type setUsersTotalCountAT = ReturnType<typeof setUsersTotalCountAC>


const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 200,
}

export type UsersType = {
    id: number
    followed: boolean
    name: string
    //location: locationType
    status: string
    photos: photosType

}

export type photosType = {
    small: string
    large: string
}

export type locationType = {
    city: string
    country: string
}
export type initialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type wrapperType = followCreatorType |
    unFollowCreatorType |
    setUserCreatorType |
    setCurrentPageAType |
    setUsersTotalCountAT

const usersReducer = (state: initialStateType = initialState, action: wrapperType) => {
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
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-USERS-TOTAL-COUNT': {
            return {...state, totalUsersCount: action.totalCount}
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
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        totalCount
    } as const
}

export default usersReducer