import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {withAythRedirect} from "../../hoc/WithAythRedirect";


type PathParamsType = {
    userId: any
}

type mapStatePropsType = {
    profile: number
    status: string
}


type mapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer(props: PropsType) {

    let userId = props.match.params.userId
    if (!userId) {
        props.history.push('/users')
    }
    props.getUserProfile(userId);
    props.getUserStatus(userId);

    return (
        <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateUserStatus}/>
    )
}

let AuthRedirectComponent = withAythRedirect(ProfileContainer)


let mapStatetoProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,

})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStatetoProps, {
    getUserProfile, getUserStatus, updateUserStatus
})(WithUrlDataContainerComponent)