import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
                    <Route path='/todos' element={<ListTodoComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
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
        navigate(`/welcome/${username}`)
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

    const {username} =  useParams()


    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your todos - <Link to='/todos'>Go here</Link>
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

function ListTodoComponent() {

    const today = new Date();

    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const todos = [
        {id:1, description: 'Learn AWS', done:false, targetDate:targetDate},
        {id:2, description: 'Learn Full Stack Dev', done:false, targetDate:targetDate},
        {id:3, description: 'Learn DevOps', done:false, targetDate:targetDate},
    
    ]





    return (
        <div className="ListTodoComponent">
            <h1>Things You Want To Do!</h1>
            <div>

                <table>

                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>

            </div>
        </div>
    )
}