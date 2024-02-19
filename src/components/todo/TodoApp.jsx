import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}> </Route>
                    <Route path='/login' element={<LoginComponent/>}> </Route>
                    <Route path='/welcome' element={<WelcomeComponent/>}> </Route>
                    <Route path='*' element={<ErrorComponent/>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {


   const [username, setUsername] = useState('in28minutes')
   const [password, setPassowrd] = useState('')
   const [showSuccessMessage, setShowSuccessMessage] = useState(false)
   const [showErrorMessage, setShowErrorMessage] = useState(false)
   const navigate = useNavigate();
function handleUsernameChange(event) {
    setUsername(event.target.value)
}

function handlePasswordChange(event) {
    setPassowrd(event.target.value)
}

function handleSubmit() {
    if(username==='in28minutes' && password === 'dummy') {
        setShowSuccessMessage(true)
        setShowErrorMessage(false)
        navigate('/welcome')
    } else {
        setShowSuccessMessage(false)
        setShowErrorMessage(true)
    }
}

// function SuccesMessageComponent() {
//     if(showSuccessMessage){
//         return <div className="successMessage">사용자 인증 성공</div>
//     }

//     return null
// }

// function ErrorMessageComponent() {
//     if(showErrorMessage){
//         return <div className='errorMessage'>사용자 인증 실패. 인증 정보를 확인하세요.</div>
//     }
    
//     return null
// }


    return (
        <div className="Login">
            <h1>Time to Login!</h1>
            {showSuccessMessage && <div className="successMessage">사용자 인증 성공</div>}
            {showErrorMessage && <div className='errorMessage'>사용자 인증 실패. 인증 정보를 확인하세요.</div>}
            <div className="LoginForm">
                <div>
                    <label>사용자 이름</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>로그인</button>
                </div>
            </div>
        </div>
    )
}





function WelcomeComponent() {
    return (
        <div className="WelcomeComponent">
            <h1>Welcome in28minutes</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>\
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}