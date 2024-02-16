export default function TodoApp() {
    return (
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent/>
            {/* <WelcomeComponent/> */}
        </div>
    )
}

function LoginComponent() {
    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>사용자 이름</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button type="button" name="login">로그인</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}