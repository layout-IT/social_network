import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "./components/redux/types";
import state, {addPost} from './components/redux/state'

type AppPropsType = {
    state: StateType
    addPost: (postMessage:string)=>void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='app-container'>
                <Nav/>

                <div className='app-wrapper-contant'>
                    <Route path='/dialogs' render={() =>
                        <Dialogs messages={props.state.mesasgesPage.messages}
                                 dialogs={props.state.mesasgesPage.dialogs}/>}/>
                    <Route path='/profile' render={() =>
                        <Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>}/>
                </div>
            </div>
        </div>

    )
        ;
}


export default App;




