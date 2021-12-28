import React from 'react'
import s from "./Users.module.scss";
import userImg from "../../assets/images/c3224969bcc3648eb22ca478989fcfbb--mr-robot-robots.jpg";
import {followingInProgressType, UsersType} from "../redux/users-reducer";
import {NavLink} from 'react-router-dom';

type  UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    user: UsersType
    followingInProgress: followingInProgressType[]
}

export let User = (props: UsersPropsType) => {
let user = props.user
    return <div className={s.container}>
        <div className={s.itemsL}>
            <NavLink to={'/profile/' + user.id}>
                <img className={s.img} src={user.photos.small !== null ? user.photos.small : userImg} alt="photo"/>
            </NavLink>
            <div className={s.wrapper_button}>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                              onClick={() => props.unfollow(user.id)} className={s.button}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                              onClick={() => props.follow(user.id)} className={s.button}>Follow</button>}
            </div>
        </div>
        <div className={s.itemsR}>
            <div className={s.itemsRL}>
                <div className={s.text}>{user.name}</div>
                <div className={s.status}>{user.status}</div>
            </div>
            <div className={s.itemsRR}>
                <div className={s.text}>{"user.location.country"}</div>
                <div className={s.texT}>{"user.location.city"}</div>
            </div>
        </div>
    </div>

}