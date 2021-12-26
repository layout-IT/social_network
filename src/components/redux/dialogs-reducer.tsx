
export type SendMessageCreatorType = ReturnType<typeof SendMessageAC>

export type newPostTextType = string


export type DialogsType = {
    id: number
    name: string

}

export type MessagesType = {
    id: string
    title: string
}


let initialState: initialStateType = {
    messages: [],
    dialogs: [],

}

export type initialStateType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

const dialogsReducer = (state: initialStateType = initialState, action: SendMessageCreatorType): initialStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE' :
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: new Date().toLocaleTimeString(), title: body}],
                dialogs: [...state.dialogs],
            };

        default:
            return state
    }
}



export const SendMessageAC = (newMessageBody:string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody

    }as const
}


export default dialogsReducer;