import React, { useState } from 'react'
import img1 from "../../assets/product11.jpg"
import { MdOutlineClose } from 'react-icons/md'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoBagCheckOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const Cart = () => {
      const [showSizeDropdown, setShowSizeDropdown] = useState(false);
      const [selectedSize, setSelectedSize] = useState('M');
       const [showQtyDropdown, setShowQtyDropdown] = useState(false);
        const [selectedQty, setSelectedQty] = useState('1');

       const handleSelectSize = (size) => {
    setSelectedSize(size);
    setShowSizeDropdown(false);
  };
     const handleSelectQty = (qty) => {
    setSelectedQty(qty);
    setShowQtyDropdown(false);
  };
  return (
    <div className='container flex  justify-center gap-5 p-5 items-start '>
      <div className='bg-white w-2/3 rounded-md shadow-lg'>
         <div className='header'>
<h1 className='ml-4 mt-4 text-[17px] font-[550]'>Your Cart</h1>
<span className='m-4 text-[14px] text-gray-500 font-[350]'>There are 
  <span className='text-[#ff5252] font-[700] ml-1 mr-1'> 1 </span> 
     products in your cart</span>
<hr className='mt-4'/>
         </div>
<div className='body flex p-4'>

<div className='w-[135px] h-38 group overflow-hidden rounded'>
  <img
    src={img1}
    className='transition-transform duration-300 group-hover:scale-125 h-38'
    alt="Product"
  />
</div>

<div className='flex flex-col ml-4 w-full'>
    <div className='flex justify-between'>
        <h1 className='text-[14px] font-[300] text-gray-600'>Allen Solly</h1>
         <MdOutlineClose className='text-[20px] hover:bg-red-500 rounded w-[25px] h-5 '/>
    </div>
    <div className='flex flex-col'>
        <h1 className='truncate w-75 text-[16px] font-[550]'>Men Pure Cotton Striped Casual Shirt...</h1>
<Rating defaultValue={3} readOnly  className='!text-[20px]'/>

<div className='flex gap-4'>
      <div className="relative mt-5">
      {/* Main Button */}
      <button
        onClick={() => setShowSizeDropdown(!showSizeDropdown)}
        className="bg-gray-300 text-black w-[90px] text-[14px] flex items-center justify-between h-8 rounded-md px-2"
      >
        Size: <span className="ml-1">{selectedSize}</span>
        <IoMdArrowDropdown className="text-[16px] ml-1" />
      </button>

      
      {showSizeDropdown && (
        <ul className="absolute left-0 top-full mt-1 bg-white shadow-md rounded-md w-[90px] z-10">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <li
              key={size}
              className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-center"
            onClick={() => handleSelectSize(size)}
            >
              {size}
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className='relative mt-5'>
<button
       onClick={() => setShowQtyDropdown(!showQtyDropdown)}
        className="bg-gray-300 text-black w-[90px] text-[14px] flex items-center justify-between h-8 rounded-md px-2"
      >
        Qty: <span className="ml-1">{selectedQty}</span>
        <IoMdArrowDropdown className="text-[16px] ml-1" />
      </button>
{showQtyDropdown && (
     <ul className="absolute left-full -top-10 mb-2 ml-2 bg-white shadow-md rounded-md w-[90px] z-10 max-h-20 overflow-y-auto">
        {Array.from({ length: 15 }, (_, i) => i + 1).map((qty) => (
  <li
    key={qty}
    className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-center"
    onClick={() => handleSelectQty(qty)}
  >
    {qty}
  </li>
))}

        </ul>


)}
    </div>

</div>

<div className='flex gap-4 mt-2 items-center'>
 <h3 className='text-[16px] font-[550]'>₹1999</h3>
<span className='line-through text-gray-500 text-[14px] '>₹2250</span>
<span className='text-[16px] font-[550] text-[#ff5252]'>10% OFF</span>
</div>

    </div>
   
</div>
<hr className='!text-gray-300 '/>
</div>
 <hr className='!text-gray-300 '/>
        </div> 






     <div className='bg-white w-1/3  rounded-md shadow-lg sticky top-54 self-start'>
  <h1 className='ml-4 mt-4 text-[17px] font-[550]'>Cart Totals</h1>
  <hr className='mt-4' />
  <div className='flex flex-col w-full'>
    <div className='flex justify-between p-2'>
      <h1 className='text-[15px] text-gray-600'>Subtotal</h1>
      <span className='text-[15px] font-[700] text-[#ff5252]'>₹1,999.00</span>
    </div>
    <div className='flex justify-between p-2'>
      <h1 className='text-[15px] text-gray-600'>Shipping</h1>
      <span className='text-[15px] font-[700] text-[#ff5252]'>Free</span>
    </div>
    <div className='p-2 text-[15px] text-gray-600'>Estimate for</div>
    <div className='flex justify-between p-2'>
      <h1 className='text-[15px] text-gray-600'>Total</h1>
      <span className='text-[15px] font-[700] text-[#ff5252]'>₹1,999.00</span>
    </div>
    <div className='mt-5 flex items-center justify-center mb-4'>
   <Link to="/checkout" >  <Button className='!w-[250px] !h-12 !text-[14px] !font-[550] !text-white !bg-[#ff5252] hover:!bg-gray-500'>
        <IoBagCheckOutline className='text-2xl' /> CheckOut
      </Button>
      </Link>
    </div>
  </div>
</div>

    </div>
  )
}

export default Cart