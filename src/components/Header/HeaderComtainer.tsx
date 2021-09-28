import React from 'react';
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {SetAuthUserData} from "../redux/auth-reducer";
import {AppStateType} from "../redux/redux-store";


type mapDispatxhToPropsType = {
    SetAuthUserData: (userId: any, email: any, login: any) => void
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

export type HeaderPropsType = mapStateToPropsType & mapDispatxhToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                "API-KEY": "4f7a90cd-f073-4cab-b304-b853b0aa67c3"
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.SetAuthUserData(id, email, login)
                }
            })
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


export default connect(mapStateToProps, {SetAuthUserData})(HeaderContainer);
