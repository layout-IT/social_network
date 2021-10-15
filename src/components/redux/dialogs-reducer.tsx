export type SendMessageCreatorType = ReturnType<typeof SendMessageAC>

export type newPostTextType = string


export type DialogsType = {
    id: number
    name: string

}

export type MessagesType = {
    id: number
    title: string
}


let initialState: initialStateType = {
    messages: [
        {id: 1, title: 'hi'},
        {id: 2, title: 'How is yor it kamasutra?'},
        {id: 3, title: 'YoO'},
        {id: 4, title: 'Сool dude'}
    ],
    dialogs: [
        {id: 1, name: 'Petr'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Victor'}
    ],

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
                messages: [...state.messages, {id: new Date().getTime(), title: body}],
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

    } as const
}


export default dialogsReducer;