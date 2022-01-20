import React from 'react';
import styled from "styled-components";
import fav from '../src/assets/img/fav.ico'

const Foot = styled.div`
    
    padding-left: 10%;
    padding-right: 10%;
    
    .footer {
        /* background-color: lightgray; */
        height: 75px;
        vertical-align: middle;
        display: flex;
        align-items: center;
        position: relative;
        border-top: solid lightgray 1px;
        margin-top: 15px;
        color: gray;
        font-size: 13px;
    } 

    .footer a {
        text-decoration: none;
        color: gray;
    }

    .footer a:link{
        text-decoration: none;
        color: gray;
    }
    
    .footer a:visited{
        text-decoration: none;
        color: gray;
    }

    .footer-ico{
        width: 30px;
        height: 30px;
        margin: 10px;
        
    }

    .footer-logo{
        margin-right: auto;
    }

    .footer-content {
        display: block;
        margin-left: 10px;
        margin-right: 10px;
    }
`

const Footer = () => (

    <Foot>
        <div className="footer">
            <img className='footer-ico' src={fav}></img>
            <div className="footer-logo"><a href='/'>© 2022 BUILDING BOYZ, Inc.</a></div>
            <div className="footer-content"><a href='/'>회사소개</a></div>
            <div className="footer-content"><a href='/'>이용약관</a></div>
            <div className="footer-content"><a href='/'>개인정보이용방침</a></div>
            <div className="footer-content"><a href='/'>안내</a></div>
            <div className="footer-content"><a href='/'>고객센터</a></div>
        </div>
    </Foot>

)
export default Footer;