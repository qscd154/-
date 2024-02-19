import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'

import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodoComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomComponent'
import LoginComponent from './LoginComponent'
import './TodoApp.css'


export default function TodoApp() {
    return (
        <div className="TodoApp">
            

            <BrowserRouter>
            <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
                    <Route path='/todos' element={<ListTodoComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>}/>

                    <Route path='*' element={<ErrorComponent/>}/>
                </Routes>
              
            </BrowserRouter>

            
        </div>
    )
}

















