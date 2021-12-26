import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.scss'
import {HeaderPropsType} from "./HeaderComtainer";
import SocialLogo from '../../assets/images/social.png'
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";


export const Header = (props: HeaderPropsType) => {
const [openClose, setOpenClose] = useState(false)
    let isAuth = useSelector<AppStateType,boolean>(state =>state.auth.isAuth )
const OpenAdditionalMenu = () => {
    setOpenClose(!openClose)
}
    return <header className={s.header}>
        <div className={s.imgH1Style}>
            <img
                src={SocialLogo}/>
            <h1>Social Network</h1>
        </div>
        <div className={s.centralMenu}>
            <div className={s.inputContainer}><input type="text" placeholder={'Search'}/></div>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bell" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                 className={s.svgBell}>
                <path fill="currentColor"
                      d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"
                      className=""></path>
            </svg>
            <div className={s.player}>
                <div className={s.playerButtons}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="step-backward" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                         className="svg-inline--fa fa-step-backward fa-w-14 fa-2x">
                        <path fill="currentColor"
                              d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"
                              className=""></path>
                    </svg>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                         className="svg-inline--fa fa-play fa-w-14 fa-2x">
                        <path fill="currentColor"
                              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                              className=""></path>
                    </svg>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="step-forward" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                         className="svg-inline--fa fa-step-forward fa-w-14 fa-2x">
                        <path fill="currentColor"
                              d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"
                              className=""></path>
                    </svg>
                </div>
                <p className={s.artistAndName}>Alis Shuka - Not About Us</p>
            </div>
        </div>
        <div>

        </div>
        <div className={s.loginBlock}>
            {isAuth ? <img src="https://miro.medium.com/max/1200/1*AbGafkazjc_S1pZPh0B9cQ.png" alt="photo"/> :<img src="http://cdn.onlinewebfonts.com/svg/download_510068.png" alt="photo"/> }

            <svg onClick={()=> OpenAdditionalMenu()} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                 className={openClose ? s.svgHoverUp: s.svgHoverDown}>
                <path fill="currentColor"
                      d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      className=""></path>
            </svg>
        </div>
        {
            isAuth ? ( openClose && <div className={s.entryExitWindow}>
                {props.isAuth ? <div className={s.popUp}>
                        <img src="https://miro.medium.com/max/1200/1*AbGafkazjc_S1pZPh0B9cQ.png" alt="photo"/>
                        <div >{props.login}</div>
                        <button onClick={props.logOut}>logOut</button>
                    </div>
                    : <NavLink className={s.login} to={'/login'}>login</NavLink>}</div> ) : (openClose && <div className={s.AreNotLoggedIn}>You are not logged in</div>)
        }

    </header>
}
