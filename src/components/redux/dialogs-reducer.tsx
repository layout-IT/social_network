import {DialogsPageType} from "./types";

export type UpdateNewMassageBodyCreatorType = ReturnType<typeof updateNewMassageBodyAC>
export type SendMessageCreatorType = ReturnType<typeof SendMessageAC>

let initialState = {
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
    newMessageBody: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: UpdateNewMassageBodyCreatorType | SendMessageCreatorType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE' :
            let body = state.newMessageBody;
            state.messages.push({id: new Date().getTime(), title: body})
            state.newMessageBody = ''
            return state;
        default:
            return state
    }
}


export const updateNewMassageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body
    } as const
}

export const SendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',

    } as const
}


export default dialogsReducer;