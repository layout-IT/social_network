import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
    follow,
    setCurrentPage,
    unFollow,
    UsersType,
    toggleIsFollowingProgress, followingInProgressType, getUsers

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
            // this.props.setCurrentPage(pageNumber)
            // this.props.toggleIsFetching(true)
            // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            //     this.props.toggleIsFetching(false)
            //     this.props.setUsers(data.items)
            // })

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
                   followingInProgress={this.props.followingInProgress}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}


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
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
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
        unFollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers,
    }
)(UsersContainer)