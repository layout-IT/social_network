type SetAuthUserDataT = ReturnType<typeof SetAuthUserData>


let initialState: initialStateType = {
    userId: 1,
    email: 'ailru',
    login: 'free',
    isAuth: true,
}

export type initialStateType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}


const AuthReducer = (state: initialStateType = initialState, action: SetAuthUserDataT): initialStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA': {

            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }


        default:
            return state
    }
}


export const SetAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: {
            userId,
            email,
            login,
        }
    } as const
}


export default AuthReducer;