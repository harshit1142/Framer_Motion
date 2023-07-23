import React, { useEffect, useRef } from 'react';
import {   motion } from 'framer-motion';
import { useInView } from 'framer-motion';


export default function Box({img,val,selected,setSelected,item}) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    console.log(`Element is in view: ${val}`, isInView)
    console.log(selected);
  }, [isInView,val,selected])

  return (
    <motion.div className='boxes m-3'
    layoutId={item}
    whileHover={{scale:1.2}}
    whileTap={{scale:0.7}}
    ref={ref}
    style={{
      // opacity:isInView?1:0.6,
      opacity:(selected===item)?0.4:1,
      transition: {
        ease:"easeIn",
        duration:2,
        delay:2
      }
    }}
    onClick={()=>setSelected(item)}
    >
           <img src={img} alt='Images....' />
           
    </motion.div>
  );
}
