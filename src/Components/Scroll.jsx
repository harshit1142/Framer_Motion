import React from 'react'
import Box from './Box';
import { images } from '../Images';

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Scroll() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

   

  return (
    <div className='scrol container-fluid d-flex flex-column justify-content-center pt-3'>
    
    <motion.h1 className='text-center' 
    transition={{
      type:"spring",
      damping:10,
     stiffness:160
    }}
    initial={{y:-400 }}
    animate={{y:0,color:"skyblue"}}
    >Disney Movies</motion.h1>

 
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      <div className='images-box' ref={ref}>
          {images.map((item,index)=>{
            return <Box img={item} val={index}/>
          })}
          </div>
    </div>
  )
}




