export type PostType = {
    id: number
    title: string
    like: number
}

export type DialogsType={
    id: number
    name: string
}

export type MessagesType={
    id: number
    title: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type MessagePageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

export type StateType ={
    profilePage: ProfilePageType
    mesasgesPage: MessagePageType

}