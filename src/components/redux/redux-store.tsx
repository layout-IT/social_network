import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebareducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";
import { Store } from "redux";

export let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebareducer,
    usersPage: usersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: appReducer,
});
export type AppStateType = ReturnType<typeof reducer>

let store: Store<AppStateType> = createStore(reducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export default store;
