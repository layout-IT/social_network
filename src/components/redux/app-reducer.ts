import {getAuthUserData} from "./auth-reducer";

type initializedSuccessT =
    ReturnType<typeof initializedSuccess>


let initialState: initialStateType = {
    initializesd: false,
}

export type initialStateType = {
    initializesd: boolean
}


const appReducer = (state: initialStateType = initialState, action: initializedSuccessT): initialStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS': {
            return {
                ...state,
                initializesd: true
            };
        }

        default:
            return state
    }
}


export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED-SUCCESS',
    } as const
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}


export default appReducer;