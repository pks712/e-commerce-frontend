import React, { useContext } from 'react'
import { MdOutlineClose, MdOutlineDelete } from 'react-icons/md'
import img1 from "../../assets/product11.jpg"
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import {motion} from "framer-motion"
import { MyContext } from '../../App'
import { Link } from 'react-router-dom'



const CartDrawer = ({onClose}) => {
  const context = useContext(MyContext)
  return (

    
    <div className='relative'>
    <motion.div
    
    animate={{opacity:[0,1] ,x:[500,0]}}
    transition={{duration:0.7 }}

    
    className='h-[550px] rounded-md'>
<div className='flex justify-between p-1 '>
  <h1 className='text-[18px] font-[600]'>Shopping Cart (1)</h1>
  <MdOutlineClose className='text-2xl hover:bg-red-500 rounded w-[30px] h-6 ' onClick={onClose} />
</div>
  <Divider/>
  <div className='flex flex-col w-full p-2 max-h-[347px] overflow-y-auto'>
    <div className='flex p-1 mt-1'>
    <div className='w-[90px] h-20 ml-4  group rounded overflow-hidden'>
<img src={img1} className='group-hover:scale-120 '  />
</div>
<div className='flex flex-col'>
  <div className='flex items-center gap-5'>
  <h2 className='truncate w-50 p-3 text-[15px] font-[550] text-gray-600 cursor-pointer link'>Men Pure Cotton Striped Casual Shirt</h2>
<MdOutlineDelete  className='text-[22px] mt-4  rounded-full w-[25px] h-6 hover:bg-red-600 '/>
  </div>
  <div className='flex gap-5'>
    <h2 className='ml-4 text-[15px] font-[350]'>
      Qty : 2
    </h2>
    <span className='text-[15px] font-[650] text-[#ff5252]'>
      ₹1,999.00
    </span>
  </div>
</div>
</div>
  <Divider/>
  </div>
  
<div className='absolute bottom-0 left-0 w-full '>
     <Divider/>
<div className='flex justify-between p-4'>

<h2 className='font-[550] text-[15px] '>1 item</h2>
<span className='text-[16px] font-[700] text-[#ff5252]'>₹1,999.00</span>
</div>
   <Divider />
<div className='flex justify-between p-4'>

<h2 className='font-[550] text-[15px]'>Total (tax excl.)
</h2>
<span className='text-[16px] font-[700] text-[#ff5252]'>₹1,999.00</span>
</div>
<div className='flex  justify-between p-1'>
<Link to="/cart"><Button className='!w-[165px] !h-11.5 !bg-[#ff5252] !text-white !text-[16px] !font-[550] hover:!bg-gray-600' onClick={onClose} >View Cart</Button> </Link> 
<Link to="/checkout"><Button className='!w-[165px] !h-11.5 !border !border-[#ff5252] !text-[#ff5252] !text-[16px]  !font-[550] hover:!bg-gray-600 hover:!text-white' onClick={onClose} >CheckOut</Button></Link>
</div>
</div>
    </motion.div>
    </div>
  )
}

export default CartDrawer