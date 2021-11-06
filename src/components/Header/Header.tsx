import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {HeaderPropsType} from "./HeaderComtainer";


export const Header = (props: HeaderPropsType) => {

    return <header className={s.header}>

        <img
            src={'https://www.markakimlik.com/wp-content/uploads/2020/09/Markalasma-Surecinde-Logo-ve-Renk-Duzeni.jpg'}/>
        <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logOut}>logOut</button></div> :
                <NavLink className={s.login} to={'/login'}>login</NavLink>}

        </div>
    </header>
}
