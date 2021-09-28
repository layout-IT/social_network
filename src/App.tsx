import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderComtainer";


function App() {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <div className='app-container'>
                <Nav/>
                <div className='app-wrapper-contant'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </div>
    )
}


export default App;




