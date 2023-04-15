const AuthReducers = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFatching: true,
                error: null
            }
        case "LOGIN_SUCCESS":
            console.log("login success",action.payload , action)
            return {
                user: action.payload.user,
                isFatching: false,
                error: null,
                accessToken : action.payload.accessToken
            }
        case "LOGIN_ERROR":
            return {
                user: null,
                isFatching: false,
                error: true
            }
    }
}

export default AuthReducers