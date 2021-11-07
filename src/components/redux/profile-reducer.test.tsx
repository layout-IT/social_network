import profileReducer, {addPostActionCreator, delPost} from "./profile-reducer";

it('New post should be added',  () => {
    let action = addPostActionCreator('text')
    let initialState = {
        posts:
            [
                {id: 1, title: 'hi, how are you', like: 12},
                {id: 2, title: 'it`s my first post', like: 15}
            ],
        profile: null,
        status: ''
    }
    let newState = profileReducer(initialState,action);
    expect( newState.posts.length).toBe(3)
    }
)


it('New post should be our name ',  () => {
        let action = addPostActionCreator('text')
        let initialState = {
            posts:
                [
                    {id: 1, title: 'hi, how are you', like: 12},
                    {id: 2, title: 'it`s my first post', like: 15}
                ],
            profile: null,
            status: ''
        }
        let newState = profileReducer(initialState,action);
        expect(newState.posts[2].title).toBe('text')
    }
)

it('Length of after del length messages shoul be dec',  () => {
        let action = delPost(1)
        let initialState = {
            posts:
                [
                    {id: 1, title: 'hi, how are you', like: 12},
                    {id: 2, title: 'it`s my first post', like: 15}
                ],
            profile: null,
            status: ''
        }
        let newState = profileReducer(initialState,action);
        expect( newState.posts.length).toBe(1)
    }
)


it ('Length of after del length messages should`t be changed',  () => {
        let action = delPost(1000)
        let initialState = {
            posts:
                [
                    {id: 1, title: 'hi, how are you', like: 12},
                    {id: 2, title: 'it`s my first post', like: 15}
                ],
            profile: null,
            status: ''
        }
        let newState = profileReducer(initialState,action);
        expect( newState.posts.length).toBe(2)
    }
)
