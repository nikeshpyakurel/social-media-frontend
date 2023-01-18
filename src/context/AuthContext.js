import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
    user: {
        _id: "63be4288b5e6e22cc7bdb990",
        username: "prayash",
        email: "prayash@gmail.com",
        password: "$2b$10$4n5y5AcRv6ywjbbBH0ie/e1Q.4cXw27OXleYnmtk6X/ZBE1kq.Gwi",
        profilePicture: "",
        coverPicture: "",
        followers: [],
        following: [
            "63be4278b5e6e22cc7bdb98e"
        ],
    },
    isFetching: false,
    error: false,
}


export const AuthContext = createContext(INITIAL_STATE);


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider
            value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}
        >
            {children}
        </AuthContext.Provider>
    )
}