import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "./components/redux/types";
import {ActionsTypes, StoreType} from "./components/redux/store";
import {DialogsContainer} from "./components/Dialogs/Dialogs-container";


type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='app-container'>
                <Nav/>

                <div className='app-wrapper-contant'>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer messages={props.state.dialogsPage.messages}
                                 dialogs={props.state.dialogsPage.dialogs}
                                 newMessageBody={props.state.dialogsPage.newMessageBody}
                                 dispatch={props.dispatch}
                        />}


                    />
                    <Route path='/profile' render={() =>
                        <Profile profilePage={props.state.profilePage}
                                 dispatch={props.dispatch}


                        />}/>

                </div>
            </div>
        </div>

    )
        ;
}


export default App;




