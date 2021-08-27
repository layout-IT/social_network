import {
    DialogsType,
    MessagesType,
    newPostTextType,
    SendMessageAC,
    updateNewMassageBodyAC
} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";


// type DialogsContainerPropsType = {
//     messages: Array<MessagesType>
//     dialogs: Array<DialogsType>
//     newMessageBody: string
//     dispatch: (action: ActionsTypes) => void
//
// }


// export function DialogsContainer(props: DialogsContainerPropsType) {
//     // let dialogsElement = props.dialogs.map(d => <DialigItem name={d.name} id={d.id}/>)
//     // let messagesElements = props.messages.map(m => <Message title={m.title}/>)
//     // let newMessageBody = props.newMessageBody
//     let onSendMassageClick = () => {
//         props.dispatch(SendMessageAC())
//     }
//
//     let onNewMassageChange = (body: any) => {
//         props.dispatch(updateNewMassageBodyAC(body))
//     }
//
//     return <Dialogs
//         updateNewMassageBody={onNewMassageChange}
//         SendMessage={onSendMassageClick}
//         dialogs={props.dialogs}
//         messages={props.messages}
//         newMessageBody={props.newMessageBody}
//
//
//     />
// }

type mapStateToPropsType = {
    messages:MessagesType[],
    dialogs: DialogsType[],
    newMessageBody:newPostTextType,
}

type mapDispatchToPropsType = {
    updateNewMassageBody: (body: string) => void
    SendMessage: () => void,
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs : state.dialogsPage.dialogs,
        messages : state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}



let mapDispatchToProps = (dispatch : Dispatch)=> {
    return {
        updateNewMassageBody: (body: string) => {
            dispatch(updateNewMassageBodyAC(body))
        },

        SendMessage: () => {

            dispatch(SendMessageAC())
        },


    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

