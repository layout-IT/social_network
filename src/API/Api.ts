import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `yarn start`,
    headers: {
        "API-KEY": "4f7a90cd-f073-4cab-b304-b853b0aa67c3"
    },

});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow (userId: number) {
        return instance.post(`follow/${userId}`)
    },

    unfollow (userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId: number) {
        console.warn('worning')
        // return instance.get(`profile/` + userId)
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile (userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    saveProfile (profile: profileType) {
        return instance.put<profileType>(`profile`, profile)
    }

}


export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email: string, password: number, rememberMe: boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    loginOut () {
        return instance.delete('auth/login')
    },
}

export type  profileType = {
    aboutMe: string
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType

}

export type contactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type photosType = {
    small: string | null
    large: string | null
}