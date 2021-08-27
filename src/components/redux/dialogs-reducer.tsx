

export type UpdateNewMassageBodyCreatorType = ReturnType<typeof updateNewMassageBodyAC>
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

export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string

}


let initialState :initialStateType = {
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

export type initialStateType ={
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}

const dialogsReducer = (state: DialogsPageType = initialState, action: UpdateNewMassageBodyCreatorType | SendMessageCreatorType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':{
            return {...state,newMessageBody : action.body};
        }
        case 'SEND-MESSAGE' :
            let body = state.newMessageBody;
            return  {...state, messages: [...state.messages,{id: new Date().getTime(), title: body}], dialogs: [...state.dialogs],newMessageBody : ''} ;

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