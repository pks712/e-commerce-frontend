import React, { useState } from 'react'
import AnimationObject from './Animation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import googlePhoto from "../../assets/google-photo.png";
import {motion} from "framer-motion"

const Signup = () => {





  return (
      <section className='relative'>
    
      <div className='bg-[#ff5252] w-full h-screen fixed top-0 left-0 z-0'>
       
        <div className="w-0 h-0 border-l-[100vw] border-b-[100vh] border-l-transparent border-b-white"></div>
        <AnimationObject />
      </div>

    
      <div className='flex items-center justify-center w-screen h-screen relative z-10'>
        <motion.div 
           animate={{opacity:[0,1] ,y:[-100 ,0]}}
      transition={{duration:0.7 }}
        
        className='bg-white w-[500px] p-10 shadow-lg rounded-lg'>
          <h2 className="text-3xl font-semibold mb-6 text-center">SignUp</h2>
          <div className='felx '>
             <TextField id="standard-basic" label="Name" variant="standard" className='!mr-7'  />
            <TextField id="standard-basic" label="Phone no." variant="standard" className='!ml-7' />
          </div>
          <TextField id="standard-basic" label="Email" variant="standard" fullWidth  className='!mt-5' />
            <TextField id="standard-basic" label="Password" variant="standard" fullWidth className='!mt-4' />
            <div className='flex flex-col items-center justify-center mt-8'>
             <div className='flex items-center justify-center gap-8'>
               <Button className='flex items-center justify-center !w-[105px] !h-11 !bg-[#ff5252] !text-white hover:!bg-gray-500 !mr-4' >
                Login</Button>
                 <Button className='flex items-center justify-center !w-[105px] !h-11 !bg-gray-400 !text-white hover:!bg-[rgba(232,126,126,0.5)] !ml-4'  >
               Cancel</Button>
             </div>
                <span className='mt-5 font-bold'>Don't have any account? 
                  <span className='link underline text-blue-400 ml-2 cursor-pointer'>Signup</span>
           </span>
           <div className='flex flex-col items-center justify-center mt-2'>
            <span className='!mt-4'>
              Or continue with social account
            </span>
            <Button className='flex items-center justify-center !w-[300px] !h-11 !bg-[#ff5252] !text-white hover:!bg-gray-500 !mt-3'>
   <img src={googlePhoto} className='w-[20px] h-5 mr-4' />Login with Google
            </Button>
           </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Signup