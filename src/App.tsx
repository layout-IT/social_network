import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {DialogsContainer} from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderComtainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./components/redux/app-reducer";
import {Preloader} from "./components/common/preloader/preloader";
import { Route } from 'react-router-dom';
import {AppStateType} from "./components/redux/redux-store";
import {connect} from "react-redux";




type mapDispatchToPropsType = {
    initializeApp: () => void
}
type mapStateToPropsType = {
    initialized: boolean
}

type AppPropsComponentype = mapStateToPropsType & mapDispatchToPropsType

class App extends Component <AppPropsComponentype> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className='app-container'>
                    <Nav/>
                    <div className='app-wrapper-contant'>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    initialized: state.app.initializesd
})
export const AppContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps, {initializeApp}
)(App)
