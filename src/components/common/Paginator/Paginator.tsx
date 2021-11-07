import React from 'react'
import s from "./Paginator.module.css";

type  UsersPropsType = {
    onPageChenged: (pageNumber: number) => void,
    currentPage: number
    totalUsersCount: number
    pageSize: number

}

export let Paginator = (props: UsersPropsType) => {
    let pageesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageesCount + 1; i++) {
        pages.push(i)
    }
    return <ul className={s.number_pages}>
            {pages.map((m, i) => {
                return <li key={i} className={s.numbers}><span className={props.currentPage === m ? s.active : ''}
                                                               onClick={(e) => props.onPageChenged(m)}>{m}</span></li>
            })}
        </ul>


}