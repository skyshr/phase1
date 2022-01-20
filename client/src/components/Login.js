import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
// css
const LoginStyle = styled.div`
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
`


// 로그인 화면
const Login = () => {

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
        console.log('ID : ', inputId)
        console.log('PW : ', inputPw)
        axios.post('http://54.180.117.235/onLogin', null, { //axios 모듈에서 .post 는 아래와 같이 매개변수 3개이고, params 를 config 로 전달해야 하기 때문에 중간에 data 값을 null 로 넣어 주었다.
            params: {
            'user_id': inputId,
            'user_pw': inputPw
            }
        })
        .then(res => {
            console.log(res)
            console.log('res.data.userId :: ', res.data.userId)
            console.log('res.data.msg :: ', res.data.msg)
            if(res.data.userId === undefined){
                // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                console.log('======================',res.data.msg)
                alert('입력하신 id 가 일치하지 않습니다.')
            } else if(res.data.userId === null){
                // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
                console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
                alert('입력하신 비밀번호 가 일치하지 않습니다.')
            } else if(res.data.userId === inputId) {
                // id, pw 모두 일치 userId = userId1, msg = undefined
                console.log('======================','로그인 성공')
                // Window.sessionStorage. 
                // sessionStorage 읽기 전용 속성은 현재 출처 세션의 Storage 객체에 접근합니다. 
                // sessionStorage는 localStorage와 비슷하지만, localStorage의 데이터는 만료되지 않고, sessionStorage의 데이터는 페이지 세션이 끝날 때 제거되는 차이가 있습니다.
                // https://developer.mozilla.org/ko/docs/Web/API/Window/sessionStorage

                // .setItem() 
                // The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
                // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
                sessionStorage.setItem('user_id', inputId)
                // 작업 완료 되면 페이지 이동(새로고침)
                document.location.href = '/'
            }
        })
        .catch()
    }
    // 1. 페이지가 처음 렌더링 후 무조건 한번 실행됨.
    // 2. useEffect에 배열로 지정한 useState의 값이 변경되면 실행된다.
    // https://ko-de-dev-green.tistory.com/18
    useEffect(() => {
        axios.get('http://54.180.117.235/login') 
        // 404 에러해결 : 서버의 포트에서 받아와야 하는데 그냥 /login이라고 하면 클라이언트의 포트(localhost:3000/login)으로 받아온다. 실제론 54.180.117.235/login에서 받아와야 함
        .then(res => console.log(res))
        .catch()
    },[]) // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가

    return (
        <LoginStyle>
            <div className="container">
                <label htmlFor="user_email">Login</label>
                <br />
                <br />
                <input type='text' className="input" name='input_id' value={inputId} onChange={handleInputId} placeholder="Enter your ID" />
                <input type='password' className="input" name='input_pw' value={inputPw} onChange={handleInputPw} placeholder="Enter your Password"  />
                <button type='button' onClick={onClickLogin}>Login</button>
                <div className="link"><NavLink to="/register">Create Account</NavLink></div>
            </div>
        </LoginStyle>
    )
}

export default Login;

