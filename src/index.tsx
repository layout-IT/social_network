import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./components/redux/redux-store";
import {Provider} from "react-redux";


    ReactDOM.render(

        <BrowserRouter>
            <Provider store = {store}>
                <App
                    // state={state}
                    //  dispatch={store.dispatch.bind(store)}
                  />,
            </Provider>

        </BrowserRouter>, document.getElementById('root'));

