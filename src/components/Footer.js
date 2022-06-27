import React from 'react'
import styled from 'styled-components'

//importing react icons
import { BsFacebook } from "react-icons/bs";
import {AiFillTwitterCircle, AiOutlineWhatsApp, AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram} from "react-icons/ai";
import{FaCarSide} from "react-icons/fa";

function Footer() {
  return (
    <FooterStyle>
    <div className="footerHeader"> Let's Connect @ -- </div>
    <div className='socialIcons'>
      <BsFacebook/>
      <AiFillTwitterCircle/>  
      <AiOutlineWhatsApp/>  
      <AiOutlineGithub/>  
      <AiFillLinkedin/>  
      <AiOutlineInstagram/>  
      </div>
      <span><FaCarSide/></span>
      </FooterStyle>
    )
  }

export default Footer;
const FooterStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: .1rem 5%;
border-top: 1px solid white;
border-bottom: 1px solid white;
position: relative;
div.footerHeader{
  font-size: 2rem;
  width: 30%;
}
div.socialIcons{
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  width: 70%;
  align-items: center;
 svg{
  transition: all .5s ease-in;
   &:hover{
     transform: scale(1.1);
     cursor: pointer;
   }
 }
}
span{
  position: absolute;
  left: 22%;
  font-size: 2.2rem;
  top: 20%;
}
`