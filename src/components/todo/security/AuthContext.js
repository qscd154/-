import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

//컨텍스트 생성
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

//생성한 컨텍스트를 다른 컴포넌트와 공유

export default function AuthProvider({ children }) {
    //컨텍스트에 State 생성


    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)

    //setInterval( () => setNumber(number+1),10000 );


    //const valueToBeShared = {number, isAuthenticated, setAuthenticated}


    // function login(username, password) {
    //     if(username==='in28minutes' && password === 'dummy') {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
             
    //      } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
                      
    //      }
    // }

    // async function login(username, password) {

    //     //window.btoa Base64 인코딩을 해주는 메서드
    //     const baToken = 'Basic ' + window.btoa(username + ":" + password)

    //     const response = await executeBasicAuthenticationService(baToken)

    //     try {

    //     if(response.status == 200) {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         setToken(baToken)

    //         apiClient.interceptors.request.use(
    //             (config) => {
    //                 console.log('intercepting and adding a token')
    //                 config.headers.Authorization=baToken
    //                 return config
    //             }
    //         )

    //         return true
             
    //      } else {
    //         logout()
    //         return false
                      
    //     }
    // }   catch(error) {
    //     logout()
    //     return false
    // }
    // }

    // function logout() {
    //     setAuthenticated(false)
    //     setToken(null)
    //     setUsername(null)
    // }

    
    async function login(username, password) {

        //window.btoa Base64 인코딩을 해주는 메서드
        

        const response = await executeJwtAuthenticationService(username,password)

        try {

        if(response.status == 200) {
            const jwtToken = 'Bearer ' + response.data.token
            setAuthenticated(true)
            setUsername(username)
            setToken(jwtToken)

            apiClient.interceptors.request.use(
                (config) => {
                    console.log('intercepting and adding a token')
                    config.headers.Authorization=jwtToken
                    return config
                }
            )

            return true
             
         } else {
            logout()
            return false
                      
        }
    }   catch(error) {
        logout()
        return false
    }
    }

    function logout() {
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    return (
        <AuthContext.Provider value= { {isAuthenticated, login, logout, username, token} }>
            {children}
        </AuthContext.Provider>
    )
}