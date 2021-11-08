import React from 'react';
import ReactDOM from "react-dom";
import {AppContainer} from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./components/redux/redux-store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>,
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
