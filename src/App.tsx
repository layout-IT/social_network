import React, {Component} from 'react';
import './App.scss';
import Nav from "./components/Nav/Nav";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderComtainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./components/redux/app-reducer";
import {Preloader} from "./components/common/preloader/preloader";
import {Route} from 'react-router-dom';
import {AppStateType} from "./components/redux/redux-store";
import {connect} from "react-redux";
import {WithSuspense} from "./hoc/WithSuspense";
import Settings from "./components/NotFound404/Settings";
import Music from "./components/NotFound404/Music";
import News from './components/NotFound404/News';
import Message from "./components/Dialogs/Message/Message";

const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))


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
                    <div className='appWrapperContainer'>
                        <Nav/>
                        <div className='app-wrapper-contant'>
                            <Route path='/dialogs' render = {WithSuspense(DialogsContainer)}/>
                            <Route path='/profile/:userId' render={WithSuspense(ProfileContainer)}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/message' render={() => <Message/>}/>
                        </div>
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
