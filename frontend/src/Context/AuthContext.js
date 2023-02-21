/* eslint-disable no-unused-expressions */
import {
    createContext,
    useState,
    useEffect,

} from "react";
import jwt_decode from 'jwt-decode'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => {
        localStorage.getItem("AuthTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null
    })
    const [user, setUser] = useState(() =>
        localStorage.getItem("AuthTokens")
            ? jwt_decode(localStorage.getItem("AuthTokens"))
            : null
    );
    return (
        <AuthContext.Provider value={{ "user": user, "token": authTokens }}>
            {children}

        </AuthContext.Provider>
    )
}