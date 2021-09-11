import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'

function DialigItem(props: DialigItemType) {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dealogs/' + props.id}>{props.name}</NavLink>
    </div>
}

type DialigItemType = {
    id: number
    name: string
}

export default DialigItem