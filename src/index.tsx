import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./components/redux/redax-store";
import {StateType} from "./components/redux/types";

export let rerenderIntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />,
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderIntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderIntireTree(state)
})
