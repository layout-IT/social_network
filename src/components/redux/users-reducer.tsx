import {usersAPI} from "../../API/Api";

export type followCreatorType = ReturnType<typeof followSuccess>
export type unFollowCreatorType = ReturnType<typeof unFollowSuccess>
export type setUserCreatorType = ReturnType<typeof setUsers>
export type setCurrentPageAType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type toggleIsFollowingProgressT = ReturnType<typeof toggleIsFollowingProgress>

export const requestYsers = (page: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(page, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setCurrentPage(page));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    })
}

export const follow = (userId: number) => {
    debugger
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))

        })
    }
}

export const unfollow = (userId: number) => {
    debugger
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))

            })
    }
}

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 200,
    isFetching: false,
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
export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId,

    } as const
}
export const unFollowSuccess = (userId: number) => {
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