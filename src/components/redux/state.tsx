// let posts: [
//     { id: 1, title: 'hi, how are you', like: 12 },
//     { id: 2, title: 'it`s my first post', like: 15 }
// ]
//
//
// let dialogs: [
//     { id: 1, name: 'Petr' },
//     { id: 2, name: 'Sasha' },
//     { id: 3, name: 'Oleg' },
//     { id: 4, name: 'Victor' }
// ]
//
//
// let messages: [{ id: 1, title: 'hi' },
//     { id: 2, title: 'How is yor it kamasutra?' },
//     { id: 3, title: 'YoO' }
// ]
//

import {PostType, StateType} from "./types";
import {rerenderIntireTree} from "../../render";

let state: StateType  = {
    profilePage: {
        posts:
            [
                {id: 1, title: 'hi, how are you', like: 12},
                {id: 2, title: 'it`s my first post', like: 15}
            ]
    },
    mesasgesPage: {
        messages: [
            {id: 1, title: 'hi'},
            {id: 2, title: 'How is yor it kamasutra?'},
            {id: 3, title: 'YoO'}
        ],
        dialogs: [
            {id: 1, name: 'Petr'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Oleg'},
            {id: 4, name: 'Victor'}
        ]

    }
}

export let addPost = (postMessage:string)=>{
    let newPost :PostType  ={
        id:5,
        title: postMessage,
        like: 0

    }
    state.profilePage.posts.push(newPost)
    rerenderIntireTree(state)
}


export default state