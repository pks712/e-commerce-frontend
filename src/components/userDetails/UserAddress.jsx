import { Button, Divider } from '@mui/material'
import React, { useContext, useState } from 'react'
import { MdModeEdit, MdOutlineDeleteOutline } from 'react-icons/md'
import { MyContext } from '../../App'

const UserAddress = () => {
    const [addAddress ,setAddAddress ] =useState(true)
    const context = useContext(MyContext)   
  return (
   <>
    { addAddress ?

 <div className='bg-white w-[700px] max-h-103 ml-4 mt-5 rounded-md shadow-lg'>
    <div className='flex justify-between items-center'>
    <h1 className='p-5 text-[20px] font-[550]'> Address</h1>
<div className='p-5'>
<Button className='!w-[165px]  !bg-[#ff5252] !text-white !text-[17px] !font-[550] hover:!bg-gray-500' onClick={()=>context.setOpenAddressDrawer(true)}> + Add Address</Button>
</div>
</div>
<Divider/>
<div className='max-h-80 overflow-y-auto'>
<div className='flex bg-gray-100 p-5 m-5 rounded-md'>
<div className='flex flex-col   '>
<h2 className='w-[55px] h-7 rounded-md bg-gray-300 flex justify-center items-center '>Home</h2>
<div className='flex gap-4 items-center mt-2 '>
<h1 className='text-[16px] font-[550] text-gray-700'>example</h1>
<span className='text-[16px] font-[400] text-gray-700'>+91 9342338191</span>
</div>
<span>example example(349872) jaipur Rajasthan (india) </span>
</div>
<div className='flex gap-4 ml-25 '>
    <Button className='!w-[45px] !h-11 !rounded-full !bg-[#288692] !text-white hover:!bg-gray-500' sx={{minWidth:"unset"}}> <MdModeEdit className='text-2xl' /></Button>
    <Button className='!w-[45px] !h-11 !rounded-full !bg-[#3a4043] !text-white hover:!bg-red-600' sx={{minWidth:"unset"}} > <MdOutlineDeleteOutline className='text-2xl'/></Button>
</div>
</div>

</div>

    </div>



   :
   <div className='bg-white w-[700px] h-85 ml-4 mt-5'>
    <h1 className='p-5 text-[20px] font-[550]'> Address</h1>
    <Divider/>
<div className='p-5'>
<Button className='!w-full !p-5 !bg-[#ff5252] !text-white !text-[17px] !font-[550] hover:!bg-gray-500'> + Add Address</Button>
</div>

    </div>
    }
    </>
  )
}

export default UserAddress