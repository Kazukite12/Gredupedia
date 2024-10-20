import "./login.css"

const Login =()=> {
    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="input-wrapper">
                        <p>Username</p>
                        <input />
                    </div>

                    <div className="input-wrapper">
                        <p>Password</p>
                        <input type="password"/>
                    </div>

                    <button>Login</button>
                </form>

            </div>
        </div>
    )
}

export default Login