import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'

const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}><a>News</a></div>
        <div className={s.item}><a>Music</a></div>
        <div className={s.item}><a>Settings</a></div>
    </nav>
}

export default Nav