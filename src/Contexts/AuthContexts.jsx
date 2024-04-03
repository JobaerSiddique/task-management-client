import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

const AuthProvider = ({children})=>{
const [users,setUsers]= useState(null)

console.log(users)


const registers= (name,email,password)=>{
    return axios.post('http://localhost:5000/api/register',{name,email,password},{withCredentials:true})
}
const userLogin = (email,password)=>{
    console.log(email,password)
    return axios.post('http://localhost:5000/api/login', {email,password},{withCredentials:true})
     
}
useEffect(()=>{
   
    axios.get('http://localhost:5000/api/verify-user',{withCredentials:true})
    .then(res=>{
        console.log(res.data)
        setUsers(res.data)
    })

},[])

const logOut = ()=>{
    return axios.get('http://localhost:5000/api/logout',{withCredentials:true})
}
const authIfo={
    
    users,
    registers,
    setUsers,
    userLogin,
    logOut
}

    
return (
        <AuthContext.Provider value={authIfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;