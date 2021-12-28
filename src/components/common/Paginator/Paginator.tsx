import React, {useState} from 'react'
import s from './Paginator.module.scss'

type  UsersPropsType = {
    onPageChenged: (pageNumber: number) => void,
    currentPage: number
    totalUsersCount: number
    pageSize: number
    splittingAccountsInto: number

}

export let Paginator = (props: UsersPropsType) => {
    let pageesCount = Math.ceil(props.totalUsersCount / props.pageSize)// общее число / сколько делать на странице
    let pages = []
    for (let i = 1; i <= pageesCount + 1; i++) {
        pages.push(i)
    }
    let numberOfBlocks = Math.ceil(pageesCount / props.splittingAccountsInto); // кол-во блоков = кол-во страниц / на сколько делить страницу
    let [porionNumber, setPortionNumber] = useState(1);
    let leftBorder = (porionNumber - 1) * props.splittingAccountsInto + 1; // листать на лево
    let rightBorder = porionNumber * props.splittingAccountsInto;  // листать на лево

    return <div className={s.wrapper}>
        {
            porionNumber > 1 ? <button className={s.button} onClick={() => setPortionNumber(porionNumber - 1)}>prev</button> : ''
        }
        {pages.filter(p => p >= leftBorder && p <= rightBorder).map((p, i) => {
            return <li key={i} className={s.numbers}>
                <span className={props.currentPage === p ? s.active : ''} onClick={() => props.onPageChenged(p)}>{p}</span>
            </li>

        })}
        {
            numberOfBlocks > porionNumber ?
                <button className={s.button} onClick={() => setPortionNumber(porionNumber + 1)}> next </button> : ''
        }
    </div>


    // return <ul className={s.number_pages}>
    //
    //     {pages.map((m,i) => <li key={i} onClick={()=>props.onPageChenged(m)}>1</li>)}
    //         {pages.map((m, i) => {
    //             return <li key={i} className={s.numbers}><span className={props.currentPage === m ? s.active : ''}
    //                                                            onClick={() => props.onPageChenged(m)}>{m}</span></li>
    //         })}
    //     </ul>


}