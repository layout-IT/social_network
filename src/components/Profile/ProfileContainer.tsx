import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";


type PathParamsType = {
    userId: string
}


type mapStatePropsType = {
    profile: number
}

type mapDispatchPropsType = {
    setUserProfile: (profile: number) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer(props: PropsType) {
    //let profile = useSelector((state:ProfilePageType ) => state.profile)
    let userId = props.match.params.userId
    if (!userId) {
        userId = '2';
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
            withCredentials: true,

            headers: {
                "API-KEY": "4f7a90cd-f073-4cab-b304-b853b0aa67c3"
            }

        })
            .then(response => {
                props.setUserProfile(response.data)
            })

    })

    return (
        <Profile {...props} profile={props.profile}/>
    )
}

let mapStatetoProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStatetoProps, {setUserProfile})(WithUrlDataContainerComponent)