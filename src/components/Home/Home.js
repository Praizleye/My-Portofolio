import React from 'react';
import '../../App.css';
import Rect from './Rect';
import styled from 'styled-components';

import {images} from '../../constants/exporter';
import HiEmoji from '../../assets/animated/HiEmoji';

function Home() {
  return (
    <div>
      <Rect/>
{/* <div>
 
    <Rect className='home__boxcontainer-1'> <BoxContainerStyle1>
    <div><HiEmoji/>My Name is Praise Leye</div>
    <div>FULL STACK WEB DEVELOPER</div>
    <div>3 YEARS EXPERIENCE</div>
    <button>Download CV</button> </BoxContainerStyle1>
    </Rect>
   
</div> */}

    </div>
  )
}

export default Home

// const BoxContainerStyle1 = styled.div`
// .home__boxcontainer-1{
// z-index: 12;
// color: red;
// // position: absolute;
// }
// ` 