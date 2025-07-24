import React, { useState } from 'react'
import { Button, Divider, Rating } from '@mui/material'
import img1 from "../../assets/mylistempty-img.png"
import { Link } from 'react-router-dom'
import img2 from "../../assets/product11.jpg"
import { IoCloseOutline } from 'react-icons/io5'

const MyList = () => {
    const [myList ,setMyList] =  useState(false)
  return (
     <div className='bg-white w-[700px] max-h-103 ml-4 mt-5 rounded-md shadow-lg'>
          <div className='flex flex-col  items-start mb-4'>
<h1 className='pl-5 mt-5 text-[20px] font-[550]'>My List</h1>
<h2 className='pl-5 text-[15px] font-[350]'>There are 
  <span  className='m-1 text-[15px] font-[500] text-[#ff5252]' >0</span>
     products in your My List</h2>

    </div>
<Divider/>

        { myList ?
<>
<div className='flex flex-col items-center justify-center mt-10'>
<img src ={img1} className='w-[135px] h-35 mt-4'/>
<h1 className='text-[18px] font-[550] text-gray-700'>My List is currently empty</h1>

<Link to ="/"><Button className='!w-[185px] !h-11 !bg-[#ff5252] !text-white !mt-5 !font-[550]'> continue shopping</Button></Link>
</div>
</>
:
<>
<div className='max-h-[315px] overflow-y-auto'>
<div className='flex flex-col'>
<div className='flex items-center gap-4 w-full mb-4'>
  <div className='img w-[155px] ml-5 mt-4  rounded overflow-hidden  group'>
<img src={img2} className='w-[135px] h-35 rounded overflow-hidden group-hover:scale-110'/>
</div> 
<div className='flex flex-col mt-2 w-full'>
    <div className='flex justify-between'>
        <h2 className='text-[15px] font-[450] text-gray-600'>Campus Sutra</h2>
        <IoCloseOutline className='text-2xl rounded hover:bg-red-500 mr-4'/>
        </div>
<h1  className='text-[18px] font-[550] text-gray-700 truncate w-100 link cursor-pointer'>Men Comfort Cuban Collar Solid Polycotton Casual Shirt</h1>
<Rating defaultValue={4} ></Rating>
<div className='flex gap-4 mt-2 items-center'>
<span className='text-[15px] font-[600]'>₹1850</span>
<h3 className='text-[14px] font-[500] line-through text-gray-500'>₹2200</h3>
<span className='text-[16px] font-[550] text-red-500'>14% OFF</span>
</div>
</div>

  </div>  
  </div> 
  <Divider/>
  <div className='flex flex-col'>
<div className='flex items-center gap-4 w-full mb-4'>
  <div className='img w-[155px] ml-5 mt-4  rounded overflow-hidden  group'>
<img src={img2} className='w-[135px] h-35 rounded overflow-hidden group-hover:scale-110'/>
</div> 
<div className='flex flex-col mt-2 w-full'>
    <div className='flex justify-between'>
        <h2 className='text-[15px] font-[450] text-gray-600'>Campus Sutra</h2>
        <IoCloseOutline className='text-2xl rounded hover:bg-red-500 mr-4'/>
        </div>
<h1  className='text-[18px] font-[550] text-gray-700 truncate w-100 link cursor-pointer'>Men Comfort Cuban Collar Solid Polycotton Casual Shirt</h1>
<Rating defaultValue={4} ></Rating>
<div className='flex gap-4 mt-2 items-center'>
<span className='text-[15px] font-[600]'>₹1850</span>
<h3 className='text-[14px] font-[500] line-through text-gray-500'>₹2200</h3>
<span className='text-[16px] font-[550] text-red-500'>14% OFF</span>
</div>
</div>

  </div>  
  </div> 
  <Divider/>
  <div className='flex flex-col'>
<div className='flex items-center gap-4 w-full mb-4'>
  <div className='img w-[155px] ml-5 mt-4  rounded overflow-hidden  group'>
<img src={img2} className='w-[135px] h-35 rounded overflow-hidden group-hover:scale-110'/>
</div> 
<div className='flex flex-col mt-2 w-full'>
    <div className='flex justify-between'>
        <h2 className='text-[15px] font-[450] text-gray-600'>Campus Sutra</h2>
        <IoCloseOutline className='text-2xl rounded hover:bg-red-500 mr-4'/>
        </div>
<h1  className='text-[18px] font-[550] text-gray-700 truncate w-100 link cursor-pointer'>Men Comfort Cuban Collar Solid Polycotton Casual Shirt</h1>
<Rating defaultValue={4} ></Rating>
<div className='flex gap-4 mt-2 items-center'>
<span className='text-[15px] font-[600]'>₹1850</span>
<h3 className='text-[14px] font-[500] line-through text-gray-500'>₹2200</h3>
<span className='text-[16px] font-[550] text-red-500'>14% OFF</span>
</div>
</div>

  </div>  
  </div> 
  <Divider/>

  <div className='flex flex-col'>
<div className='flex items-center gap-4 w-full mb-4'>
  <div className='img w-[155px] ml-5 mt-4  rounded overflow-hidden  group'>
<img src={img2} className='w-[135px] h-35 rounded overflow-hidden group-hover:scale-110'/>
</div> 
<div className='flex flex-col mt-2 w-full'>
    <div className='flex justify-between'>
        <h2 className='text-[15px] font-[450] text-gray-600'>Campus Sutra</h2>
        <IoCloseOutline className='text-2xl rounded hover:bg-red-500 mr-4'/>
        </div>
<h1  className='text-[18px] font-[550] text-gray-700 truncate w-100 link cursor-pointer'>Men Comfort Cuban Collar Solid Polycotton Casual Shirt</h1>
<Rating defaultValue={4} ></Rating>
<div className='flex gap-4 mt-2 items-center'>
<span className='text-[15px] font-[600]'>₹1850</span>
<h3 className='text-[14px] font-[500] line-through text-gray-500'>₹2200</h3>
<span className='text-[16px] font-[550] text-red-500'>14% OFF</span>
</div>
</div>

  </div>  
  </div> 
  <Divider/>
  </div>
</>
 }
    </div>
  )
}

export default MyList