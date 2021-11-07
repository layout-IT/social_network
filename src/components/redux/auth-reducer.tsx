import {authAPI} from "../../API/Api";

type SetAuthUserDataT = ReturnType<typeof SetAuthUserData>


let initialState: initialStateType = {
    userId: 1,
    email: 'ailru',
    login: 'free',
    isAuth: false,
}

export type initialStateType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}


const AuthReducer = (state: initialStateType = initialState, action: SetAuthUserDataT): initialStateType => {
    switch (action.type) {
        case 'auth/SET-AUTH-USER-DATA': {

            return {
                ...state,
                ...action.payload
            };
        }


        default:
            return state
    }
}


export const SetAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'auth/SET-AUTH-USER-DATA',
        payload: {
            userId,
            email,
            login,
            isAuth,
        }
    } as const
}
export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(SetAuthUserData(id, email, login, true))
    }
}

export const logIn = (email: string, password: number, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}

export const logOut = () => async (dispatch: any) => {
    let response = await authAPI.loginOut();
    if (response.data.resultCode === 0) {
        dispatch(SetAuthUserData(0, '0', '0', false))
    }
    ;
}

export default AuthReducer;