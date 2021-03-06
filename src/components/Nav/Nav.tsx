import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.scss'
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";

const Nav = () => {
    const isauth = useSelector<AppStateType,boolean>(state => state.auth.isAuth)
    return <nav className={s.nav}>
        <div className={s.item}>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user-circle" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
                 className="svg-inline--fa fa-user-circle fa-w-16 fa-2x">
                <path fill="currentColor"
                      d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"
                      className=""></path>
            </svg>

            {/*{!isauth ? <NavLink className={s.nameStyle} to='/profile/' activeClassName={s.active}>Profile</NavLink> :  <NavLink className={s.nameStyle} to='/profile/18971' activeClassName={s.active}>Profile</NavLink>}*/}
            <NavLink className={s.nameStyle} to={!isauth ? '/' : '/profile/18971'} activeClassName={!isauth ? '' : s.active}>Profile</NavLink>

        </div>
        <div className={`${s.item} ${s.active}`}>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                 className="svg-inline--fa fa-comment fa-w-16 fa-2x">
                <path fill="currentColor"
                      d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                      className=""></path>
            </svg>
            {/*{!isauth ? <NavLink className={s.nameStyle} to='/profile' activeClassName={s.active}>Messages</NavLink> : <NavLink className={s.nameStyle} to='/Dialogs' activeClassName={s.active}>Messages</NavLink>}*/}
          <NavLink className={s.nameStyle} to={!isauth ? '/' : '/message'} activeClassName={!isauth ? '' : s.active}>Messages</NavLink>

        </div>
        <div className={`${s.item} ${s.active}`}>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                 className="svg-inline--fa fa-user fa-w-14 fa-2x">
                <path fill="currentColor"
                      d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                      className=""></path>
            </svg>

            <NavLink className={s.nameStyle} to='/users' activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="newspaper" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                 className="svg-inline--fa fa-newspaper fa-w-18 fa-3x">
                <path fill="currentColor"
                      d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"
                      className=""></path>
            </svg>
            {/*{!isauth ?  <NavLink className={s.nameStyle} to='/Profile' activeClassName={s.active}>News</NavLink>: <NavLink className={s.nameStyle} to='/News' activeClassName={s.active}>News</NavLink> }*/}
           <NavLink className={s.nameStyle} to={!isauth ? '/' : '/news'} activeClassName={!isauth ? '' : s.active}>News</NavLink>

        </div>
        <div className={`${s.item} ${s.active}`}>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="list-music" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                 className="svg-inline--fa fa-list-music fa-w-16 fa-2x">
                <path fill="currentColor"
                      d="M470.36 1.51l-112 35.38A32 32 0 0 0 336 67.36v299.12c-18.16-9.07-40.16-14.48-64-14.48-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V195.36L489.64 162A32 32 0 0 0 512 131.48V32a32 32 0 0 0-41.64-30.49zM272 464c-39.7 0-64-20.72-64-32s24.3-32 64-32 64 20.72 64 32-24.3 32-64 32zm192-344.25L384 145V79.12l80-25.26zM16 104h256a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16H16A16 16 0 0 0 0 72v16a16 16 0 0 0 16 16zm0 128h256a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16zm144 96a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16z"
                      className=""></path>
            </svg>
            {/*{!isauth ?  <NavLink className={s.nameStyle} to='/profile' activeClassName={s.active}>Music</NavLink>: <NavLink className={s.nameStyle} to='/music' activeClassName={s.active}>Music</NavLink>}*/}
           <NavLink className={s.nameStyle} to={!isauth ? '/' : '/music'}  activeClassName={!isauth ? '' : s.active}>Music</NavLink>

        </div>
        <div className={`${s.item} ${s.active}`}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cogs" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                 className="svg-inline--fa fa-cogs fa-w-20 fa-2x">
                <path fill="currentColor"
                      d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"
                      className=""></path>
            </svg>
            {/*{!isauth ?  <NavLink className={s.nameStyle} to='/profile' activeClassName={s.active}>Settings</NavLink>:  <NavLink className={s.nameStyle} to='/settings' activeClassName={s.authActive}>Settings</NavLink>}*/}
            <NavLink className={s.nameStyle} to={!isauth ? '/' : '/settings'} activeClassName={!isauth ? '' : s.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Nav