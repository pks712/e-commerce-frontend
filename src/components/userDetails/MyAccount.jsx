import React, { useState } from 'react'
import { Button, Divider, TextField } from '@mui/material'
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css"; 

const MyAccount = () => {
          const [phone, setPhone] = useState("");
  return (
    <div className='bg-white w-[700px] h-85 ml-4 mt-5 rounded-md shadow-lg'>
      <div className='flex justify-between items-center p-5'>
     <h1 className='text-[20px] font-[550]'>My Profile </h1>
     <Button className ="!w-[165px] !h-11 !bg-[#ff5252] !text-white  hover:!bg-gray-500"> Change password</Button>
        </div>  
      <Divider/>
     
      <div className='flex flex-col '>
<div className='flex p-5 justify-between w-full '>
 <TextField id="outlined-basic" label="Full Name" variant="outlined" size='small' sx={{width:315 }} />
 <TextField id="outlined-basic" label="Email" variant="outlined" size='small' sx={{width:315 }} />
</div>
<div className='flex flex-col p-5 gap-5'>
 <PhoneInput defaultCountry="in" value={phone} onChange={(phone) => setPhone(phone)} className="custom-phone-input z-[100] relative "  required/>
    <Button className ="!w-[165px] !h-11 !bg-[#ff5252] !text-white hover:!bg-gray-500 !mt-5"> Update profile</Button>
</div>
        </div>  
        </div>

  )
}

export default MyAccount