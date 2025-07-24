import { Button } from '@mui/material'
import React from 'react'

const AddreshSave = () => {
  return (
  





    <div className='bg-white w-2/3 rounded-md shadow-lg '>
<h1 className='text-[18px] font-[550] p-5 text-gray-700'>Select Delivery Address</h1>
<div className='flex flex-col items-center justify-center mt-12'>
<img src={mapImg} className='w-[95px]' />
<h2 className='text-[17px] font-[550] text-gray-600'>No Addresses found in your account!</h2>
<h3 className='text-[15px] font-[300]'>Add a delivery address.</h3>

<Button className='!mt-4 !bg-[#ff5252] !text-white !mb-5 !w-[135px] !h-11 ' onClick={()=>context.setOpenAddressDrawer(true)}   >Add Address</Button>
</div>


 </div>

  )
}

export default AddreshSave