import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import  {addPost} from "./components/redux/state";
import {StateType} from "./components/redux/types";

export let rerenderIntireTree =(state:StateType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>,
        </BrowserRouter>,
        document.getElementById('root'));
}