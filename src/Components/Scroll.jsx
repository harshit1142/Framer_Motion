import React from 'react'
import Box from './Box';

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Scroll() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
   const images=[1,2,3,4,5,6,7,8,9,10,1,2,2,4,5,6,6,6,6,6,6,6,6,6,6,6];
 

  return (
    <div className='scrol container-fluid'>
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
          {images.map((item)=>{
            return <Box />
          })}
          </div>
    </div>
  )
}




