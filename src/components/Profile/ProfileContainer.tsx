import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {withAythRedirect} from "../../hoc/WithAythRedirect";


type PathParamsType = {
    userId: any
}

type mapStatePropsType = {
    profile: number

}


type mapDispatchPropsType = {
    getUserProfile: (userId: any) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer(props: PropsType) {

    let userId = props.match.params.userId
    if (!userId) {
        userId = '2';
    }
    props.getUserProfile(userId)


    return (
        <Profile {...props} profile={props.profile}/>
    )
}

let AuthRedirectComponent = withAythRedirect(ProfileContainer)


let mapStatetoProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,

})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStatetoProps, {
    getUserProfile,
})(WithUrlDataContainerComponent)