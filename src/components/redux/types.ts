export type PostType = {
    id: number
    title: string
    like: number
}
export type newPostTextType = string


export type DialogsType = {
    id: number
    name: string

}

export type MessagesType = {
    id: number
    title: string
}


export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: newPostTextType
}

export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string

}

export type sideBarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: sideBarType

}