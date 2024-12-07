import './styles/Login.css';

const LoginForm: React.FC = () => {
    return (
        <>
            <section className="login-form">
                <form className="input-container" action="">
                    <div className="int-area">
                        <input
                            type="text"
                            name="id"
                            id="name-input"
                            required />
                        <label
                            id="id"
                            htmlFor='name-input'>ID/E-MAIL</label>
                    </div>

                    <div className="int-area">
                        <input
                            type="password"
                            name="password"
                            id="password-input"
                            required />
                        <label
                            id="pw"
                            htmlFor='password-input'>PASSWORD</label>
                    </div>
                </form>

                <button id="btn-login" type="submit">LOGIN</button>
                <div id="register">
                    <a rel='register' href="" target="_blank">REGISTER</a>
                </div>
            </section>
        </>
    )
};

export default LoginForm;