import React from 'react';
import styled from 'styled-components';


function About() {
  return (
   <AboutStyle>
    <div>
    <div className="aboutHeader">Get To Know Me</div>
    <div className="aboutText">My Name is Praise Ogunleye, 23 Years Old, Full Stack Developer
    I possess a degree in Chemical Engineering and have passion for making things work.
      Asides coding i also have skills in hardware maintenance and servicing of computer gadgets, installation of smart devices and sound equipments.
      I started coding in 2016, having taking compulsory course on C programming language, later
      realizing i loved coding but did'nt know where to start, tried Java, PHP before falling to Javascript.
      Over the years i have grown amidst rapidly changing and morphing technologies, and what has kept me so far has been my desire to learn even when it doesnt make sense till it makes sense.
    </div>
    </div>
    </AboutStyle>
  )
}

export default About;

const AboutStyle = styled.div `
margin: 5rem 5%;
height: 100vh;
div.aboutHeader{
  font-size: 4rem;
//  margin: 5%;
 text-align: center;
}
div.aboutText{
  font-size: 1.5rem;
  margin: 4.5rem 0.5rem;
  letter-spacing: .1rem;
  word-spacing: .1rem;
  line-height: 3rem;
}
`