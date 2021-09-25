import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect, useSelector} from "react-redux";
import {ProfilePageType, setUserProfile} from "../redux/profile-reducer";
import {RouteComponentProps, withRouter } from "react-router-dom";


type PathParamsType ={
    userId:string
}


type mapStatePropsType = {
    profile: number
}

type mapDispatchPropsType = {
    setUserProfile: (profile:number) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer (props:PropsType){
    let profile = useSelector((state:ProfilePageType ) => state.profile)
    let userId = props.match.params.userId
    if (!userId){
        userId ='2';
    }




    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0.0/profile` + userId)
            .then(response => {props.setUserProfile(response.data)})
    })

    return(
        <Profile profile={profile}/>
    )
}

let mapStatetoProps = (state: any):mapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStatetoProps,{setUserProfile})(WithUrlDataContainerComponent)