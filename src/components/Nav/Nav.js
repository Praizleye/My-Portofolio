import React, {useState} from 'react';

// importing other dependencies
import styled from 'styled-components';
import {RiMenuFoldLine, RiCloseFill} from 'react-icons/ri';
import {motion} from 'framer-motion'

//importing Nav components
import NavBg from './NavBg';

function Nav() {

  const [toggle, setToggle] = useState(true);


  const variants = {
    visible: { opacity: 1},
    hidden: { opacity: 0},
  }

  return (
    <>
    <NavStyle>
    <nav className='app__navbar'>
    <div className='app__navbar-logo'> Logo goes here</div>
     <ul className='app__navbar-links'>
       <div></div>
    {
    (['home', 'skills', 'about', 'work',  'contact'].map((item,index)=>(
        <li className='app__flex' key={index}>
           <a href={`#${item}`}> {item}</a> 
        
        </li>
    )))
    }
     </ul>
    </nav>
</NavStyle>


<NavMenuBar>
<div className='app__navbar-menu' >

 <motion.div  
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
    
  }}
  whileTap={{ scale: 0.9 }}     
  onClick={()=> setToggle(!toggle)}>
{
  toggle ? (<RiMenuFoldLine/>):  ( <RiCloseFill/>)
}
 </motion.div>
 {/* this div is for the nav menu bar .... */}


 <motion.div
//  animate= {toggle ? "hidden" : "visible"}
//  variants={variants}
 >
  { toggle ? (''):
  (  <motion.ul className='app__navbar-links'
  
  >
  <div></div>
{
(['home', 'skills', 'about', 'work', 'contact'].map((item,index)=>(
   <li className='app__navbar-link' key={`menu-$(index)`} >
      <a href={`#${item}`}> {item}</a> 
   
   </li>
)))
}
</motion.ul>) 

  }
 </motion.div>

 
  {/* <NavBg toggle={toggle} setToggle={setToggle}/> */}
 

</div>

</NavMenuBar>

</>
  )
}

export default Nav;


const NavStyle = styled.div`
.app__navbar{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;

  .app__navbar-logo{
      display: flex;
       justify-content: flex-start;
      align-items: center;
        }
  
         .app__navbar-links{
            display:flex;
            margin-top: 1rem;
         li{
               margin: 0 1rem;
               list-style-type: none;
             padding-top: 1.5rem; 
            }
            a{
              text-decoration: none;
              color: var(--priColor);
              text-transform: uppercase;
            }
            @media screen and (max-width: 1024px){
              display: none;
            } 
        } 
     
}

`
const NavMenuBar = styled.div`

.app__navbar-menu {
         position: fixed;
       left: calc(100vw - 70px);       
       top:50%;  
           height: 50px;
       width: 50px;
        border-radius: 50%;
       z-index: 10;
                svg{
           height: 2.8rem;
        width: 2.8rem;
        left: 50%;
        top: 50%;
        transform: translate(10%, 10%);
        cursor: pointer;
        background: var(--bgColor);
        border-radius:50%;
        border: .2rem solid white;
        padding: .5rem;
        
                 }
                 ul{
                  height:40rem;
                  width: 40rem;
                  border-radius: 50%;
                  position: absolute;
                  left: -35vw;
                  top: 50%;
                  transform: translateY(-50%);
                  z-index: -10;
                  background: var(--priColor);
                  border: .2rem solid white;
                  display: flex;
                  flex-direction: column;
                  padding: 7rem 3rem;
                  justify-content:space-evenly;
                 li{
                   list-style: none;
                   font-size: 1.1rem;
                  text-transform: uppercase;
                  cursor: pointer;
               
                 
               a{
                text-decoration: none;
                color: var(--offsetBgColor);
                 }
                }
              }
                 @media screen and (min-width: 767px){
                  display: none;
                }
      }
`
 
      
     
