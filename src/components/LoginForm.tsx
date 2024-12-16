import '../styles/Login.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type LoginForm = {
    id: string;
    password: string;
};

const LoginForm = () => {
    const [isActive, setIsActive] = useState(false);
    const [form, setForm] = useState({
        id: '',
        password: ''
    });
    const { id, password } = form;
    const navigate = useNavigate();

    useEffect(() => {
        // 두 필드 모두 채워졌을 때 로그인 버튼 활성화
        setIsActive(id !== '' && password !== '');
    }, [id, password]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }));
    }, []);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            access(); // Enter 키를 눌렀을 때 로그인 처리
        }
    }, [id, password]);

    const access = useCallback(() => {
        if (id === 'radian@gamil.com' && password === '12345') {
            navigate('/home'); // 홈으로 이동
        } else if (id === '') {
            alert('아이디를 입력해주세요.');
        } else if (password === '') {
            alert('비밀번호를 입력해주세요.');
        } else {
            alert('아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해주세요.');
        }
    }, [id, password, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // 폼 기본 제출 방지
        access();
    };

    return (
        <>
            <section className="login-form">
                <form className="input-container" onSubmit={handleSubmit}>
                    <div className="int-area">
                        <input
                            type="text"
                            name="id"
                            value={id}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            id="name-input"
                            autoComplete='email'
                            required
                        />
                        <label id="id" htmlFor='name-input'>ID/E-MAIL</label>
                    </div>

                    <div className="int-area">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            id="password-input"
                            autoComplete='current-password'
                            required
                        />
                        <label id="pw" htmlFor='password-input'>PASSWORD</label>
                    </div>

                    <button
                        id="btn-login"
                        className={isActive ? "login-active" : "login-inactive"}
                        type="submit"
                    >
                        LOGIN
                    </button>
                </form>

                <div id="register">
                    <Link to="/register">REGISTER</Link>
                </div>
            </section>
        </>
    );
};

export default LoginForm;
