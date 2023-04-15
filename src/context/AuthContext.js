import { createContext, useReducer } from "react"
import AuthReducers from "./AuthReducers"
const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
    accessToken : ""
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducers, INITIAL_STATE)

    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error , accessToken : state.accessToken, dispatch }} >
            {children}
        </AuthContext.Provider>
    )
}