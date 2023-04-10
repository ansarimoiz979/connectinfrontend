const AuthReducers = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user : null,
                isFatching : true,
                error : null
            }
        case "LOGIN_SUCCESS":
            return {
                user : action.payload,
                isFatching : false,
                error : null    
            }
        case "LOGIN_ERROR":
            return {
                user : null,
                isFatching : false,
                error : true
            }
    }
}

export default AuthReducers