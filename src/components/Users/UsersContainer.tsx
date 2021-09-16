import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC,
    UsersType
} from "../redux/users-reducer";
import Users from "./Users";

type mapStateToPropsType ={
    users : UsersType[]
    pageSize:number
    totalUsersCount:number
    currentPage : number

}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage:(pageNumber: number) => void
    setTotalUsersCount:(totalCount: number) => void
}

        let mapStateToProps = (state: AppStateType) : mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage,
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
        setCurrentPage : (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount : (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)