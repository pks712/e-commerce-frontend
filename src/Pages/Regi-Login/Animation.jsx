import React from 'react'
import {motion} from "framer-motion"
const AnimationObject = () => {
  return (
    <div>
        <motion.div 
animate={{opacity:[0,1,0,1], z: [0,-2000, 0],  rotate: [0, 180, 360], scale: [1, 0.5, 1], }}
transition={{duration:3,delay:1 ,repeat:Infinity,repeatDelay:10 }}
className="w-24 h-24  z-[100] absolute bottom-10 right-10 rounded-md bg-[rgba(230,89,89,0.2)]" >

</motion.div>
<motion.div
animate={{opacity:[0,1,0,1], z: [0,-2000, 0],  rotate: [0, 180, 360], scale: [1, 0.5, 1], }}
transition={{duration:3,delay:5  ,repeat:Infinity,repeatDelay:10 }}
className="w-24 h-24  z-[100] absolute top-20 right-10 rounded-md bg-[rgba(230,89,89,0.2)]">

</motion.div>
<motion.div 
animate={{opacity:[0,1,0,1], z: [0,-2000, 0],  rotate: [0, 180, 360], scale: [1, 0.5, 1], }}
transition={{duration:3,delay:10  ,repeat:Infinity,repeatDelay:10 }}
className="w-24 h-24  z-[100] absolute bottom-10 left-80 rounded-md bg-[rgba(230,89,89,0.2)]">

</motion.div>
<div
  
   className="w-0 h-0 
  border-l-[55px] 
  border-r-[55px] 
  border-b-[90px]
    border-l-transparent 
    border-r-transparent 
     border-b-[rgba(230,89,89,0.2)]
    absolute top-42 right-5 z-50 rotate-58">
</div>

<div className="w-0 h-0 
  border-l-[55px] 
  border-r-[55px] 
  border-b-[90px] 
  border-l-transparent 
  border-r-transparent 
 border-b-[rgba(230,89,89,0.2)]
  absolute bottom-11 left-105 z-[50] rotate-90">
</div>
<div className="w-0 h-0 
  border-l-[55px] 
  border-r-[55px] 
  border-b-[90px] 
  border-l-transparent 
  border-r-transparent 
 border-b-[rgba(230,89,89,0.2)]
  absolute bottom-14 right-30 z-[50] rotate-31">
</div>

    </div>
  )
}

export default AnimationObject