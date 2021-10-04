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
import {Redirect} from "react-router-dom";
import React from "react";
import {withAythRedirect} from "../../hoc/WithAythRedirect";


type mapStateToPropsType = {
    messages:MessagesType[],
    dialogs: DialogsType[],
    newMessageBody:newPostTextType,
    isAuth:boolean,
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
let AuthRedirectComponent = withAythRedirect(Dialogs)

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
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

