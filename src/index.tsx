import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./components/redux/state";
import {StateType} from "./components/redux/types";

export let rerenderIntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>,
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderIntireTree(store.getstate())
