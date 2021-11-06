import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";





export const getPageSize = (state :AppStateType ) => {
    return state.usersPage.pageSize;
}

export const getTotalUserCount = (state :AppStateType ) => {
    return state.usersPage.totalUsersCount;
}

export const getcurrentPage= (state :AppStateType ) => {
    return state.usersPage.currentPage;
}

export const getisFetching = (state :AppStateType ) => {
    return state.usersPage.isFetching;
}
export const getfollowingInProgress = (state :AppStateType ) => {
    return state.usersPage.followingInProgress;
}
const getUserSelector =(state: AppStateType) => {
    return state.usersPage.users;
};

export const getUser = createSelector(getUserSelector,(users ) => {
    return users
});