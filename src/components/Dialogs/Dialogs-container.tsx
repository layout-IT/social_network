import {
    DialogsType,
    MessagesType,
    newPostTextType,
    SendMessageAC,
} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {withAythRedirect} from "../../hoc/WithAythRedirect";


type mapStateToPropsType = {
    messages:MessagesType[],
    dialogs: DialogsType[],
    newMessageBody:newPostTextType,
    isAuth:boolean,
}

type mapDispatchToPropsType = {
    SendMessage: (newMessageBody:string) => void,
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs : state.dialogsPage.dialogs,
        messages : state.dialogsPage.messages,
    }
}
let AuthRedirectComponent = withAythRedirect(Dialogs)

let mapDispatchToProps = (dispatch : Dispatch)=> {
    return {

        SendMessage: (newMessageBody:string) => {

            dispatch(SendMessageAC(newMessageBody))
        },


    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

