import React from 'react'
import s from "./Users.module.css";
import userImg from "../../assets/images/c3224969bcc3648eb22ca478989fcfbb--mr-robot-robots.jpg";
import {followingInProgressType, UsersType} from "../redux/users-reducer";
import {NavLink} from 'react-router-dom';

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
        <ul className={s.number_pages}>
            {pages.map((m, i) => {
                return <li key={i} className={s.numbers}><span className={props.currentPage === m ? s.active : ''}
                                                               onClick={(e) => props.onPageChenged(m)}>{m}</span></li>
            })}
        </ul>
        {
            props.users.map(u => <div className={s.container} key={u.id}>
                <div className={s.itemsL}>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.img} src={u.photos.small !== null ? u.photos.small : userImg} alt="photo"/>
                    </NavLink>
                    <div className={s.wrapper_button}>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => props.unfollow(u.id)} className={s.button}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => props.follow(u.id)} className={s.button}>Follow</button>}
                    </div>
                </div>
                <div className={s.itemsR}>
                    <div className={s.itemsRL}>
                        <div className={s.text}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                    </div>
                    <div className={s.itemsRR}>
                        <div className={s.text}>{"u.location.country"}</div>
                        <div className={s.texT}>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}