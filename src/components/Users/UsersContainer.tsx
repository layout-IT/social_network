import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../redux/users-reducer";
import Users from "./Users";

type mapStateToPropsType ={
    users : UsersType[]
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

        let mapStateToProps = (state: AppStateType) : mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

export type mapPropsdispatchType = mapDispatchToPropsType & mapStateToPropsType

let mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {
    return {
        follow : (userId:number) => {
            dispatch(followAC(userId));
        },
        unFollow : (userId:number) => {
            dispatch(unFollowAC(userId));
        },
        setUsers : (users:UsersType[]) => {
            dispatch(setUsersAC(users));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)