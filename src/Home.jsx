import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/imgs/svg.png';
import Comon from './Comon';


function Home() {
  return (
    <>
   <Comon name="Grow Your Bussiness" imgsrc={web} visit="/service" btname="Get Started" />
      
    </>

  )
}

export default Home;

