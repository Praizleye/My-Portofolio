import React from 'react';
import styled from 'styled-components';

import {GiMuscleUp} from 'react-icons/gi'

function Work() {
  return (
    <WorkStyle>
      <div>
    <div className="workHeader">Projects Built <GiMuscleUp/></div>
    <div className="projects project__Blog">
    
    </div>
    <div className="projects project__stockDB">
    
    </div>
    <div className="projects project__BudgetAnalyser">
    
    </div>
    <div className="projects project__Fashion-Designer-Db">
    
    </div>
    <div className="projects project__fileExplorer">
    
    </div>
      </div>
      </WorkStyle>
  )
}

export default Work
const WorkStyle = styled.div`
height: 100vh;
margin: 5rem 5%;
position: relative;
div.workHeader{
  font-size: 4rem;
  text-align: center;
}
div.projects{
  height: 40%;
  width: 30%;
  margin: 4.5rem 0.5rem;
  position: absolute;
  background: white;
  transition: all .5s ease-in-out;
  border: .2rem solid black;
  &:hover{
    z-index: 5;
    transform: scale(1.2);
    cursor: pointer;
    border: none;
  }
}
.project__stockDB{
  left: 15%;
  top: 25%;
}
.project__BudgetAnalyser{
  left: 35%;
  top: 50%;
}
.project__Fashion-Designer-Db{
  right: 15%;
  top: 25%;
 
}
.project__fileExplorer{
  right: 0;
  
}
`