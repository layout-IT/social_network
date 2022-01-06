import load from "../../../assets/images/load.gif";
import s from './preloader.module.scss'

export let Preloader = () => {
 return <div  className={s.wrapper}>
     <img src={load} alt="loading"/>
 </div>
}