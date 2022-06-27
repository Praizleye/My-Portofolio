import React from "react";
import styled from "styled-components";
import "../../App.css";
import HiEmoji from "../../assets/animated/HiEmoji";
import images from "../../constants/images";

import { AiOutlineCloudDownload, AiOutlineSend } from "react-icons/ai";

const Rect = () => {
  return (
    <BoxContainer>
      <div className="port_image">
        <img src={images.portImage} alt="pic of myself" />
      </div>
      <div className="home__boxcontainer-1">
        <div className="Name">
          <div>
            <HiEmoji />
          </div>
          <div>
            My Name is <span style={{ fontWeight: "Bold", fontSize: "2.5rem"  }}>Praise Leye</span>
          </div>
        </div>
        <div className="Skillset" style={{ fontSize: "2rem", padding: "1rem"  }}>FULL STACK WEB DEVELOPER</div>
        <div className="Experience" style={{ fontSize: "2rem", textAlign: "center"  }}> 
        <span style={{ fontWeight: "Bold", fontSize: "2.5rem"  }}>3 YEARS</span> EXPERIENCE
        </div>
        <div style={{ fontSize: "1.5rem",padding: "1rem", opacity: 0.8  }}>I Build Scalable, Responsive Web Apps customized to viewers tasted
          and highly Optimized
        </div>
        <button>Download CV <AiOutlineCloudDownload style={{paddingTop:'.5rem'}}/></button>
      </div>
      <div className="home__boxcontainer-2">
        <div>Get in Touch</div>
        <form>
          <label htmlFor="name">
            Name:
            <input type="text" name="name"></input>
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name="email"></input>
          </label>
          <div>
            <label htmlFor="work">
            <input type="radio" name="category" id="work" />
              Work
            </label>
            <label>
            <input type="radio" name="category" id="collabo" />
              Collaboration
            </label>
            <label>
            <input type="radio" name="category" id="coffee-chat" />
              Coffee Chat
            </label>
            <label htmlFor="other">
              Other:
              <input type="text" name="other" id="other" />
            </label>
          </div>
          <div>
            <label htmlFor="message">
              Message:
              <textarea name="message" id="message" cols="30" rows="10"/>
            </label>
          </div>
          <button>Send Message <AiOutlineSend/></button>
        </form>
      </div>
    </BoxContainer>
  );
};

export default Rect;

const BoxContainer = styled.div`
  position: relative;
  height: 100vh;
  .port_image img {
    height: 70%;
    width: 40%;
    object-fit: cover;
    position: absolute;
    left: 5%;
    top: 10%;
    border: 0.2rem solid black;
    transition: all 0.5s ease-in-out;
    @media screen and (max-width: 767px) {
      height: 25rem;
      width: 15rem;
      object-position: top top;
    }
    &:hover {
      z-index: 5;
      transform: scale(1.2);
      cursor: pointer;
      border: none;
    }
  }
  .home__boxcontainer-1 {
    height: 70%;
    width: 35%;
    background-color: var(--offsetBgColor);
    color: var(--priColor);
    position: absolute;
    left: 60%;
    top: 20%;
    transition: all 0.5s ease-in-out;
    z-index: 5;
    border: 0.2rem solid black;
    font-size: 1.5rem;
    div.Name {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      width: 100%;
      div{
      svg {
        height: 6rem;
        width: 6rem;
        display:flex;
        justify-content: center;
        align-items:center;
        @media screen and (max-width: 767px) {
          height: 4rem;
          width: 4rem;
          left: 30%;
          top: 35%;
        }
      }
    }
      div{
      font-size: 1.5rem;
      text-align: center;
      }
    }
    @media screen and (max-width: 767px) {
      height: 25rem;
      width: 15rem;
      left: 30%;
      top: 35%;
    }
    &:hover {
      z-index: 5;
      transform: scale(1.2);
      cursor: pointer;
      border: none;
    }
  }
  .home__boxcontainer-2 {
    height: 55%;
    width: 30%;
    background-color: var(--offsetBgColor);
    color: var(--priColor);
    position: absolute;
    left: 40%;
    top: 45%;
    z-index: 3;
    transition: all 0.5s ease-in-out;
    border: 0.2rem solid black;
    @media screen and (max-width: 767px) {
      display: none;
    }
    &:hover {
      z-index: 5;
      transform: scale(1.2);
      cursor: pointer;
      border: none;
    }
  }
  button{
    font-size: 1.7rem;
    padding: .5rem;
    border-radius: 1rem;
    &:hover{
      cursor: pointer;
    }
  }
`;
