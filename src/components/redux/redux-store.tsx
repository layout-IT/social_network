import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebareducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";


export let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebareducer,
    usersPage: usersReducer,
});
export type AppStateType = ReturnType<typeof reducer>

let store = createStore(reducer);
// @ts-ignore
window.store = store;

export default store;
