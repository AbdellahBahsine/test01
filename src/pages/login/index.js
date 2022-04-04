import './login.styles.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login__image"></div>
            <h2>Login</h2>
            <div className="username__container">
                <i class="fas fa-user"></i>
                <input type="text" placeHolder="Username" />
            </div>
            <div className="password__container">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
            </div>
            <button>Login</button>
        </div>
    )
}

export default LoginPage;