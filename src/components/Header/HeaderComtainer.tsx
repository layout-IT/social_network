import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {getAuthUserData} from "../redux/auth-reducer";

type mapDispatchToProps = {
    getAuthUserData: () => void
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

export type HeaderPropsType = mapStateToPropsType & mapDispatchToProps

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

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
    getAuthUserData,
})(HeaderContainer);
