import { createContext, useContext, useState } from "react";

//컨텍스트 생성
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

//생성한 컨텍스트를 다른 컴포넌트와 공유

export default function AuthProvider({ children }) {
    //컨텍스트에 State 생성


    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)

    //setInterval( () => setNumber(number+1),10000 );


    //const valueToBeShared = {number, isAuthenticated, setAuthenticated}


    function login(username, password) {
        if(username==='in28minutes' && password === 'dummy') {
            setAuthenticated(true)
            setUsername(username)
            return true
             
         } else {
            setAuthenticated(false)
            setUsername(null)
            return false
                      
         }
    }

    function logout() {
        setAuthenticated(false)
        setUsername(null)
    }


    return (
        <AuthContext.Provider value= { {isAuthenticated, login, logout, username} }>
            {children}
        </AuthContext.Provider>
    )
}