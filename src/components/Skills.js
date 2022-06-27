import React from "react";
import "../App.css";
import styled from "styled-components";

import { FaFigma,FaReact,FaSass,FaNodeJs, FaBrain } from "react-icons/fa";
import { SiAdobexd,SiAdobeillustrator,SiThreedotjs,SiMongodb,SiStrapi,SiTailwindcss,SiNpm,SiAdobephotoshop } from "react-icons/si";
import { FiFramer } from "react-icons/fi";




function Skills() {
  return (
    <StyleSkills>
      <div className="Skills">
        <div className="skillsHeader"> MY Skills <span><FaBrain/></span> </div>
        <ul>
          <li>
            <div className="iconDesc">Frontend Web Developer</div>

            <div>
              <div className="frIcon framer-Icon">
                <FiFramer />
              </div>
              <h5>FramerMotion</h5>
            </div>

            <div>
              <div className="frIcon react-Icon">
                <FaReact />
              </div>
              <h5>ReactJs</h5>
            </div>
            <div>
              <div className="frIcon sass-Icon">
                <FaSass />
              </div>
              <h5>Sass</h5>
            </div>
            <div>
              <div className="frIcon tailwind-Icon">
                <SiTailwindcss />
              </div>
              <h5>TailWindCss</h5>
            </div>
            <div>
              <div className="frIcon strapi-Icon">
                <SiStrapi />
              </div>
              <h5>Strapi CMS</h5>
            </div>
            <div>
              <div className="frIcon three-Icon">
                <SiThreedotjs />
              </div>
              <h5>ThreeJs</h5>
            </div>
          </li>
          <li>
            <div className="iconDesc">Backend Developer</div>

            <div>
              <div className="brIcon node-Icon">
                <FaNodeJs />
              </div>
              <h5>Nodejs</h5>
            </div>

            <div>
              <div className="brIcon react-Icon">
                <SiMongodb />
              </div>
              <h5>MongoDb</h5>
            </div>
            <div>
              <div className="brIcon npm-Icon">
                <SiNpm />
              </div>
              <h5>NPM</h5>
            </div>
          </li>
          <li>
            <div className="iconDesc">User Interface Design</div>
            <div>
              <div className="brIcon node-Icon">
                <FaFigma />
              </div>
              <h5>Figma</h5>
            </div>
            <div>
              <div className="brIcon node-Icon">
                <SiAdobexd />
              </div>
              <h5>Adobe Experience</h5>
            </div>
            <div>
              <div className="brIcon node-Icon">
                <SiAdobeillustrator />
              </div>
              <h5>Adobe Illustrator</h5>
            </div>
            <div>
              <div className="brIcon node-Icon">
                <SiAdobephotoshop />
              </div>
              <h5>PhotoShop</h5>
            </div>
          </li>
        </ul>
      </div>
    </StyleSkills>
  );
}
// so i am thinking of adding a head image to the myskills 
//age just to lighten up the place a lilbit
export default Skills;

const StyleSkills = styled.div`
  // background: var(--offsetBgColor);
  // background: royalblue;
  margin:20vh 5% 0;
  height: 100vh;
  div.skillsHeader {
    font-size: 4rem;
    text-transform: Uppercase;
    text-align: center;
  }
  ul {
    margin: 4.5rem 0.5rem;
    // background: red;
    li {
      list-style: none;
      margin: 4.5rem auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // background: purple;
      div.iconDesc{
        font-size: 2rem;
      }
      div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        div.frIcon{
          font-size: 3.5rem;
        }
        div.brIcon{
          font-size: 2rem;
     
        }
        h5{
          margin-top: .4rem;
          letter-spacing: .2rem;
        }
      }
    }
  }
`
