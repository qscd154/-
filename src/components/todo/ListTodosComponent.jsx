import { useEffect, useState } from "react";
import { retrieveAllTodosForUsername, deleteTodoApi } from "./api/TodoApiService copy";

function ListTodoComponent() {

    const today = new Date();

    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    useEffect(() => refreshTodos(), [])


    function refreshTodos() {
        retrieveAllTodosForUsername('in28minutes')
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        deleteTodoApi('in28minutes', id)
        .then(

            () => {
                setMessage(`id가 ${id}인 할일을 성공적으로 삭제했습니다.`)
                refreshTodos()
            }

        )
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <div className="alert alert-warning">{message}</div>
            <div>

                <table className='table'>

                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
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
                                    <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>삭제</button></td>
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

export default ListTodoComponent