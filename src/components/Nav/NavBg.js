import React from 'react';
import '../../App.css'
import styled from 'styled-components';
import { motion } from 'framer-motion';


const NavBg = ({toggle, setToggle}) => {
const variants ={
    visible: {opacity:1, x: "40rem", y:"40rem"},
    hidden: {opacity:0.5, x:0, y:0}
}


  return (
    <motion.div
    initial="hidden"
    animate={toggle ? "visible": "hidden"}
    transition= {{ delay: 0.2, delayChildren: 1}}
    variants= {variants}>
      <NavBgMobile/>
   
    </motion.div>
  )
}

export default NavBg

const NavBgMobile =styled.div`
height:40rem;
width: 40rem;
border-radius: 50%;
position: absolute;
left: -35vw;
top: 50%;
transform: translateY(-50%);
z-index: -10;
background: var(--priColor);
`