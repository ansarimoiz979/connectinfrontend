const LOGIN_START = () => ({
    type: "LOGIN_START",
})


const LOGIN_SUCCESS = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})


const LOGIN_ERROR = () => ({
    type: "LOGIN_ERROR"
})