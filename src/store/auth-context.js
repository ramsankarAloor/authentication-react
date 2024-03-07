import React, { useState } from "react";

const AuthContext = React.createContext({
    token : null,
    isLoggedIn : false,
    login : (token)=>{},
    logout: ()=>{}
})

export const AuthContextProvider=props=>{
    const [token, setToken] = useState(null)

    const isLoggedIn = !!token

    function loginHandler(t){
        setToken(t)
    }

    function logoutHandler(){
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