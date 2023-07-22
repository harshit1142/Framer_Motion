import React, { useEffect, useRef } from 'react';
import {  animate, motion } from 'framer-motion';
import { useInView } from 'framer-motion';


export default function Box({img,val}) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    console.log(`Element is in view: ${val}`, isInView)
    
  }, [isInView])

  return (
    <motion.div className='boxes m-3'
    whileHover={{scale:1.2}}
    ref={ref}
    style={{
      opacity:isInView?1:0.6,
      transition: "all 0.9s 0.5s"
      
      
    }}
    >
           <img src={img} alt='Images....' />
           
    </motion.div>
  );
}
