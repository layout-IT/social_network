import React from 'react';
import s from './Post.module.css'



const Post = (props: any) => {
    return <div className={s.wrapper}>
        <div className={s.item}>
            <img src={'https://ru.fishki.net/picsw/112009/18/bonus/face/face_photo_032.jpg'}/>
            {props.message}
        </div>
        <span >like {props.like}</span>
    </div>
}


export default Post












