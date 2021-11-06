import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {logOut} from "../redux/auth-reducer";

type mapDispatchToProps = {
    logOut: () => any

}
type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

export type HeaderPropsType = mapStateToPropsType & mapDispatchToProps

class HeaderContainer extends React.Component<HeaderPropsType> {


    render() {
        return <div>
            <Header {...this.props} />
        </div>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {
    logOut,
})(HeaderContainer);
