export type followCreatorType = ReturnType<typeof follow>
export type unFollowCreatorType = ReturnType<typeof unFollow>
export type setUserCreatorType = ReturnType<typeof setUsers>
export type setCurrentPageAType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type toggleIsFollowingProgressT = ReturnType<typeof toggleIsFollowingProgress>


const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 200,
    isFetching: true,
    followingInProgress: [],
}


export type followingInProgressType = {}
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
    followingInProgress: followingInProgressType[]
}

type wrapperType = followCreatorType |
    unFollowCreatorType |
    setUserCreatorType |
    setCurrentPageAType |
    setTotalUsersCountAT |
    toggleIsFetchingAT |
    toggleIsFollowingProgressT

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

        case 'TOGGLE-IS-FOLLOWING-PROGRASS' :
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => !action.userId)
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

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRASS',
        isFetching,
        userId,
    } as const
}

export default usersReducer