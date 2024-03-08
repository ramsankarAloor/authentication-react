import React, { useState } from "react";

const AuthContext = React.createContext({
    token : null,
    isLoggedIn : false,
    login : (token)=>{},
    logout: ()=>{}
})

export const AuthContextProvider=props=>{
    const initialTokenValue = localStorage.getItem('token')
    // we just needed this variable other than useEffect to initilize the token
    // because localstorage operations are synchronous.
    const [token, setToken] = useState(initialTokenValue)

    const isLoggedIn = !!token

    function loginHandler(t){
        localStorage.setItem('token', t);
        setToken(t)
    }

    function logoutHandler(){
        localStorage.removeItem('token')
        setToken(null)
    }

    const authContext = {
        token: token,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    
    return(
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;