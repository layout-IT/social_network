import React from 'react';
import ReactDOM from "react-dom";
import {AppContainer} from "./App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./components/redux/redux-store";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <AppContainer/>,
        </Provider>
    </HashRouter>,
    document.getElementById('root'));
