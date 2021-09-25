export type followCreatorType = ReturnType<typeof follow>
export type unFollowCreatorType = ReturnType<typeof unFollow>
export type setUserCreatorType = ReturnType<typeof setUsers>
export type setCurrentPageAType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetching>


const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 200,
    isFetching: true
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
    isFetching: boolean
}

type wrapperType = followCreatorType |
    unFollowCreatorType |
    setUserCreatorType |
    setCurrentPageAType |
    setTotalUsersCountAT |
    toggleIsFetchingAT

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
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state
    }
}


export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId,

    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId,
    } as const
}

export const setUsers = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        totalCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}

export default usersReducer