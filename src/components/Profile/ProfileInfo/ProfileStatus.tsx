import React, {ChangeEvent, useState} from 'react';
import s from './ProfileStatus.module.css'


type ProfileStatusType = {
    status: string
    updateStatus: any
}

const ProfileStatus = (props: ProfileStatusType) => {
    let [state, setState] = useState({
        editMode: false,
        status: props.status
    })
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({...state, status: e.currentTarget.value})
    }
    const activatedMode = () => {
        setState({...state, editMode: true})
    }
    const deactivatedMode = () => {
        setState({...state, editMode: false})
        props.updateStatus(state.status)

    }

    return <div className={s.status}>
        {!state.editMode
            ?
            <div>
                <span onDoubleClick={activatedMode}>Status: {state.status} </span>
            </div>
            :
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivatedMode} value={state.status}/>
        }
    </div>

}
export default ProfileStatus