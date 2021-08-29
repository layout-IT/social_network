import React from "react";
import {mapPropsdispatchType} from "./UsersContainer";
import s from './Users.module.css'
import  axios from "axios";
import userImg from '../../assets/images/c3224969bcc3648eb22ca478989fcfbb--mr-robot-robots.jpg'


class User extends React.Component <mapPropsdispatchType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return <div className={s.wrapper}>
            {/*<button onClick={this.getUsers}>Get users</button>*/}
            {
                this.props.users.map(u => <div className={s.container} key={u.id}>
                    <div className={s.itemsL}>
                        <img className={s.img} src={u.photos.small !== null ? u.photos.small : userImg} alt="photos"/>
                        <div className={s.wraooer_button}>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }} className={s.button}>Follow</button> :
                                <button onClick={() => {
                                    this.props.follow(u.id)
                                }} className={s.button}>Unfollow</button>}
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
}

export default User