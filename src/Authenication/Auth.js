import {  createContext, useContext, useState } from "react";

const AuthContext=createContext(null)


export const AuthProvider=({children})=>{

    const [user,setUser]=useState(null)

    const login=(user)=>{
        console.log(user)
    }
    


    
    const logout=()=>{
        console.log()
    }

    return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>

}

export const useAuth=()=>{
    return useContext(AuthContext)
}