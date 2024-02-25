import { useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodoApiService copy"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { Formik, Form, Field } from "formik"

export default function TodoComponent() {
    
    const {id} = useParams()

    const [description, setDescription]=  useState('')
    const [targetDate, setTargetDate]=  useState('')
    const authContext = useAuth()
    const username = authContext.username

    useEffect(
        () => retrieveTodos(),
        [id]
    )

    function retrieveTodos() {
        retrieveTodoApi(username, id)
        .then(response => {
            setDescription(response.data.description)
            setTargetDate(response.data.targetDate)
        })
        .catch(error => console.log(error))
    }
    
    return (
        <div className="container">
            <h1>할일 상세정보를 입력하세요</h1>
            <div>
                <Formik initialValues={{ description , targetDate}}
                    enableReinitialize = {true}
                >
                    {
                    (props) => (
                        <div>
                            <Form>
                                <fieldset className="form-group">
                                    <label>
                                        Description
                                    </label>
                                    <Field type="text" className="form-control" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>
                                    Target Date
                                    </label>
                                    <Field type="date" className="form-control" name="targetDate"/>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit">저장</button>
                                </div>
                                </Form>
                        </div>
                    )
}
                </Formik>
            </div>

        </div>
    )
}