import { useEffect, useState } from "react";
import { retrieveAllTodosForUsername, deleteTodoApi } from "./api/TodoApiService copy";
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom";


function ListTodoComponent() {

    const today = new Date();

    const authContext = useAuth() 
    const username = authContext.username

    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    const navigate = useNavigate()
    useEffect(() => refreshTodos(), [])


    function refreshTodos() {
        retrieveAllTodosForUsername(username)
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        deleteTodoApi(username, id)
        .then(

            () => {
                setMessage(`${id} delete success.`)
                refreshTodos()
            }

        )
        .catch(error => console.log(error))
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    function addNewtodo() {
        navigate(`/todo/-1`)
    }

    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}            
            <div>

                <table className='table'>

                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" 
                                    onClick={() => deleteTodo(todo.id)}>삭제</button></td>
                                    <td><button className="btn btn-success" 
                                    onClick={() => updateTodo(todo.id)}>업데이트</button></td>
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>

            </div>
            <div className="btn btn-success m-3" onClick={addNewtodo}>
                    할 일 추가
            </div>
        </div>
    )
}

export default ListTodoComponent