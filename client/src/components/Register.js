
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
// css
const RegisterStyle = styled.div`
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    background-color: #f7f7f7;
    font-family: "Ubuntu", sans-serif;
    margin: 0;
    padding: 0;
    color: #222222;
    overflow-x: hidden;
    overflow-wrap: break-word;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    padding: 50px;
}

.container {
    background-color: white;
    max-width: 450px;
    margin: 0 auto;
    padding: 40px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
    border-radius: 3px;
    margin-top: 100px;
    margin-bottom: 100px;
}

.container h2 {
    margin: 0 0 20px 0;
    text-align: center;
}

input,
button {
    font-family: "Ubuntu", sans-serif;
    outline: none;
    font-size: 1rem;
}

.input {
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid #bbbbbb;
    border-radius: 3px;
}

.input:hover {
    border-color: #999999;
}

.input:focus {
    border-color: black;
}

[type="button"] {
    background: #000000;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 4px;
    padding: 12px 0;
    cursor: pointer;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    margin-top: 5px;
    font-weight: bold;
    width: 100%;
}

[type="button"]:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

label {
    font-weight: bold;
    font-size: 36px
}

.link {
    margin-top: 10px;
    text-align: center;
}

.link a {
    color: black;
}

.registerText {
    color: white;
}

`



// 회원가입 화면
const Register = () => {
    const [inputId, setInputId] = useState('')
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPw, setInputPw] = useState('')
    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputName = (e) => {
        setInputName(e.target.value)
    }
    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const onClickRegister = () => {
        // console.log('click register')
        // console.log('ID : ', inputId)
        // console.log('Name : ', inputName)
        // console.log('Email : ', inputEmail)
        // console.log('PW : ', inputPw)
        axios.post('http://54.180.117.235/onRegister', null, {
            params: {
                'user_id': inputId,
                'user_name' : inputName,
                'user_email': inputEmail,
                'user_pw': inputPw
            }
        })
        .then(res => {
            console.log('레스', res)
            console.log('레스.데이터.유저아이디: ', res.data.userId)
        })
        .catch()
    }
    useEffect(() => {
        axios.get('http://54.180.117.235/register')
        .then(res => console.log(res))
        .catch()
    }, [])

    return (
        <RegisterStyle>
            <div className="container">
                <h1>Create Account</h1>
                <form action="" method="POST">
                    <input type="text" className="input" name="input_id" autoComplete="off" id="user_id" value={inputId} onChange={handleInputId} placeholder="Enter your ID" />
                    <input type="text" className="input" name="input_name" autoComplete="off" id="user_name" value={inputName} onChange={handleInputName} placeholder="Enter your name" />
                    <input type="email" className="input" name="input_email" autoComplete="off" id="user_email" value={inputEmail} onChange={handleInputEmail} placeholder="Enter your email" />
                    <input type="password" className="input" name="input_pw" id="user_pass" value={inputPw} onChange={handleInputPw} placeholder="Enter password" />
                    <button type='button' onClick={onClickRegister}><NavLink to="/login" className="registerText">Register</NavLink></button>
                    <div className="link"><NavLink to="/login">Login</NavLink></div>
                </form>
            </div>
        </RegisterStyle>
    )
}

export default Register