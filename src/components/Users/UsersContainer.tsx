import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount, toggleIsFetching,
    unFollow,
    UsersType
} from "../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/preloader";

class UsersContainer extends React.Component <mapPropsdispatchType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
         page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }


    render() {

        let onPageChenged = (pageNumber: number) => {
            this.props.setCurrentPage(pageNumber)
            this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?
         page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })

        }

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChenged={onPageChenged}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}


            />
        </>
    }
}

type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

export type mapPropsdispatchType = mapDispatchToPropsType & mapStateToPropsType

export default connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        toggleIsFetching,
        setTotalUsersCount,
    }
)(UsersContainer)