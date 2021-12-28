import React from 'react'
import s from "./Users.module.scss";
import {followingInProgressType, UsersType} from "../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type  UsersPropsType = {
    onPageChenged: (pageNumber: number) => void,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: UsersType[]
    currentPage: number
    totalUsersCount: number
    pageSize: number
    followingInProgress: followingInProgressType[]
}

export let Users = (props: UsersPropsType) => {
    let pageesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageesCount + 1; i++) {
        pages.push(i)
    }

    return <div className={s.wrapper}>
        <Paginator currentPage={props.currentPage} onPageChenged={props.onPageChenged} pageSize={props.pageSize}
                   totalUsersCount={props.totalUsersCount} splittingAccountsInto={10}/>
        {
            props.users.map(u => <User key={u.id} user={u}
                                       followingInProgress={props.followingInProgress}
                                       unfollow={props.unfollow}
                                       follow={props.follow}
                />
            )
        }
    </div>
}