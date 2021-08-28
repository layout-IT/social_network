import React from "react";
import {mapPropsdispatchType} from "./UsersContainer";
import s from './Users.module.css'


let Users = (props:mapPropsdispatchType) => {
    if (props.users.length === 0){
        props.setUsers([
            {id: 1, photoUrl: 'https://vraki.net/sites/default/files/inline/images/10_342.jpg', followed: false, fullname: 'Albert', status: 'Everyone called me kind and sweet when I was a child… so they jinxed it', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl: 'https://oir.mobi/uploads/posts/2020-01/1579144441_18-24.jpg', followed: true, fullname: 'Sasha', status: 'I am a very creative person — I want to create, I want to get up!', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: 'https://cache3.youla.io/files/images/780_780/5c/1f/5c1f68cdf235029ffe3b35c9.jpg', followed: true, fullname: 'Dima', status: 'I have a non-aggression pact with my conscience: it doesn\'t bite me — I don\'t have it.', location: {city: 'Kazan', country: 'Russia'}},
            {id: 4, photoUrl: 'https://yt3.ggpht.com/a/AGF-l79j4KYiiDnMsj5AY5MuxckEXkt-paWzFE4Tcg=s900-c-k-c0xffffffff-no-rj-mo',  followed: false, fullname: 'Dasha', status: 'To hell, me? And the devils-what did they do to you?', location: {city: 'N-N', country: 'Russia'}},
        ])
    }

return <div className={s.wrapper}>Users
    {
        props.users.map(u => <div className={s.container} key={u.id}>
            <div className={s.itemsL} >
                <img className={s.img} src={u.photoUrl} alt="photo"/>
               <div>
                   {u.followed ?
                       <button onClick={() => {props.unFollow(u.id)}} className={s.button}>Follow</button> :
                       <button onClick={() => {props.follow(u.id)}} className={s.button}>Unfollow</button> }
               </div>
           {/*<button className={s.button}>{u.followed ? <button className={s.button}>Follow</button> : <button className={s.button}>Unfollow</button>}</button>*/}
            </div>
            <div className={s.itemsR}>
                <div className={s.itemsRL}>
                    <div className={s.text}>{u.fullname}</div> <div className={s.status}>{u.status }</div>
                </div>
                <div className={s.itemsRR}>
                    <div className={s.text}>{u.location.country}</div> <div className={s.texT}>{u.location.city }</div>
                </div>
            </div>
        </div>)
    }
</div>
}

export default Users