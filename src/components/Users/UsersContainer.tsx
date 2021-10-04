import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
    follow,
    unfollow,
    setCurrentPage,
    UsersType,
    toggleIsFollowingProgress,
    followingInProgressType,
    getUsers
} from "../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/preloader";

class UsersContainer extends React.Component <mapPropsdispatchType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        let onPageChenged = (pageNumber: number) => {
            this.props.getUsers(pageNumber, this.props.pageSize);
        }
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChenged={onPageChenged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   followingInProgress={this.props.followingInProgress}
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
    followingInProgress: followingInProgressType[]
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export type mapPropsdispatchType = mapDispatchToPropsType & mapStateToPropsType

export default connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers,
    }
)(UsersContainer)