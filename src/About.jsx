import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/imgs/abot.jpg';
import Comon from './Comon';


function About() {
  return (
    <>
 <Comon name="WelCome to About Page" imgsrc={web} visit="/Contact" btname="Contact Now" />
      
    </>

  )
}

export default About;

