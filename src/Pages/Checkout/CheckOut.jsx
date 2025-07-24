import React, { useContext, useState } from 'react'
import mapImg from "../../assets/map-img.png"
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import img1 from "../../assets/product11.jpg"
import paypalImage from "../../assets/PayPal-img.png"
import { IoBagCheckOutline } from 'react-icons/io5'
import { MyContext } from '../../App'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
const CheckOut = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [address ,setAddress] =useState(false)

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

 const context = useContext(MyContext)
  return (
 <div className='container flex  justify-center gap-5 p-5 items-start '>

  { address ?
  (
    <div className='bg-white w-2/3 rounded-md shadow-lg '>
        <div className='flex justify-between items-center p-4'>
            <h1 className='text-[18px] font-[550] p-5 text-gray-700'>Select Delivery Address</h1>
            <Button className='!w-[185px] !h-11 !text-[15px] !font-[530] !text-white !bg-[#ff5252] hover:!bg-gray-500' >+Add new address </Button>
        </div>
  
 <div
  onClick={() => handleSelect(`office || home`)}
  className='flex bg-white  w-[590px] rounded-sm  shadow-lg border border-gray-500 cursor-pointer ml-9 mb-5'>
<div className='flex ml-4 p-3'>
 <FormControlLabel   value="office || home"   control={<Radio checked={selectedValue === 'office' || "home"} />} />
<div className='flex flex-col '>
  <h3 className='bg-gray-400 rounded-full w-[55px] flex items-center justify-center'>Office</h3>
  <h1 className='text-[17px] font-bold'>kon1</h1>
  <span className='text-[15px] font-[350]'>
    swamipura shahpura (303103) jaipur Rajashtan (india) <br /> +91 9920030234
  </span>
  <span className='text-[16px] text-gray-700 mt-4'>
    +91 9920030234
  </span>

</div>

</div>
<div className='edit mt-4 ml-2'>
    <Button className='!w-[105px] !h-10 !bg-[#369cdb] !text-white hover:!bg-gray-500'>Edit</Button>
</div>
 </div>
</div>
  )
:
 (
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
<div className='bg-white w-1/3 rounded-md shadow-lg'>
    <h1 className='text-[18px] font-[550] p-5 text-gray-700'>Your Order</h1>
    <Divider/>
    <div className='flex justify-between p-4 '>
<h2>Product</h2>
<h2>total</h2>
    </div>
    <Divider/>
    <div className='flex flex-col ml-4 mt-2 max-h-[205px] overflow-y-auto'>
       <div className='flex p-1'>
    <div className='w-[60px] h-15   group rounded overflow-hidden'>
<img src={img1} className='group-hover:scale-120 '  />
</div>
<div className='flex flex-col'>
  <div className='flex items-center gap-5'>
  <h2 className='truncate w-30 ml-3 text-[15px] font-[550] text-gray-600 cursor-pointer link'>Men Pure Cotton Striped Casual Shirt</h2>
  <span className='text-[15px] font-[650] text-[#ff5252]'>
      ₹1,999.00
    </span>
  </div>
  <div className='flex gap-5'>
    <h2 className='ml-3 text-[15px] font-[350]'>
      Qty : 2
    </h2>
  </div>
</div>
        </div>

    </div>
    <div className='flex flex-col items-center justify-center mt-5 gap-4 mb-4'>
 <Button className='!w-[250px] !h-12 !text-[14px] !font-[550] !text-white !bg-[#ff5252] hover:!bg-gray-500 flex items-center gap-2 '>
        <IoBagCheckOutline className='text-2xl' /> CheckOut
      </Button>
       <Button className='!w-[250px] !h-12 !text-[14px] !font-[550] !text-white !bg-yellow-400 hover:!bg-gray-500 flex items-center gap-2 '>
<img src={paypalImage}/>
      </Button>
     
       <Button className='!w-[250px] !h-12 !text-[14px] !font-[550] !text-white !bg-[#251515] hover:!bg-gray-500 flex items-center gap-2'>
        <IoBagCheckOutline className='text-2xl' /> Cash ON delivery
      </Button>
     
</div>
 </div>
    </div>
  )
}

export default CheckOut