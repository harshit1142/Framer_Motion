import React from 'react'
import { motion } from 'framer-motion';
export default function Model({selected,setSelected}) {
    if(selected===null){
        return <></>;
    }
    return (
    <motion.div onClick={()=>{setSelected(null)}}
    className='container-fluid box-full d-flex justify-content-center align-items-center mt-5'
    layoutId={selected}
    initial={{opacity:0}}
    animate={{opacity:1 }}
    exit={{opacity:0}}
    >
      <div onClick={(e)=>e.stopPropagation()}
      className='box-inner'>
        
      <img src={selected} alt="" />
      </div>
    </motion.div>
  )
}
