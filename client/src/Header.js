import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import logo from "../src/assets/img/logo.png"
import { useEffect, useState } from 'react';


const HeaderNav = styled.div`

  nav {
    padding-left: 120px;
    padding-right: 120px;
  }

  ul {
    display: flex;
    height: 48px;
    justify-content: space-around;
    align-items: center;
  }

  li {
      background-color: white;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 24px;
      padding-top: 12px;
  }

  li:hover {
      background-color: #070b4a;
      transform: scale(1.1);
      transition: all 0.1s linear;
      p {
        color: white;
      }
  }

  p {
    color: #070b4a;
  }

  /* 밑줄 제거 */
  a {
    text-decoration: none;
  }

  /* 폰트 */
  font-family: 'Roboto', sans-serif;
`



const Header = () => {
    // 로그인 상태 관리
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
      if(sessionStorage.getItem('user_id') === null){
        // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
          console.log('isLogin ? :: ', isLogin)
      } else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
        setIsLogin(true)
        console.log('isLogin ? :: ', isLogin)
      }
    })

    // 로그인 상태 -> Logout탭 노출, 비로그인 상태 -> Login 탭 노출
    
    return (
        <>
          <HeaderNav>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
            <nav>
              <ul>
                  <NavLink to="/" ><img alt="test" className="LogoImg" src={logo} width={240}/></NavLink>
                <li><NavLink to="/contents" ><p>Contents</p></NavLink></li>
                <li><NavLink to="/board" ><p>Board</p></NavLink></li>
                <li><NavLink to="/mypage" ><p>MySchedule</p></NavLink></li>
                <li style={ isLogin ? { display: 'none' } : { display: 'inline-flex' }}><NavLink to="/login" ><p>Login</p></NavLink></li>
                <li style={ isLogin ? { display: 'inline-flex' } : { display: 'none' }}><NavLink to="/logout" ><p>Logout</p></NavLink></li>
              </ul>
            </nav>
          </HeaderNav>
        </>
    );
};

export default Header;