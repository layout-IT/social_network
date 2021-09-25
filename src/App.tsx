import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { useSelector} from "react-redux";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='app-container'>
                <Nav/>
                <div className='app-wrapper-contant'>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>}


                    />
                    <Route path='/profile/:userId' render={() =>
                        <ProfileContainer  />}
                    />

                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </div>

    )
        ;
}


export default App;




