export const authSuccess = (payload) => {
    return {
        type: "AUTH_SUCCESS",
        payload: payload
    }
}

export const logout = () => {
    return { 
        type: "LOGOUT",
    }
}

export const updateProfile = (payload) => {
    return { 
        type: "UPDATE_PROFILE",
        payload: payload
    }
}