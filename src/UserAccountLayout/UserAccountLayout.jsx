import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { IoIosHeartEmpty, IoIosLogOut, IoMdPerson } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdLocationPin } from 'react-icons/md';
import { List, ListItemButton } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router-dom';
const UserAccountLayout = () => {

const [optionSelect ,setOptionSelect] =useState("")
const location = useLocation("myaccount")

  useEffect(() => {
    setOptionSelect(location.pathname);
  }, [location]);

  return (
    <div className='flex container '>
<div className='flex flex-col w-[300px]  bg-white mt-5 rounded mb-5'>
<div className='flex flex-col items-center justify-center p-5'>
  
     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />

  <h1 className='text-[18px] font-[500] text-gray-600 mt-4'>kon1</h1>
  <span className='text-[15px] text-gray-600 '>kon1@gmail.com</span>
   
</div>
<div className='bg-gray-200 rounded-b '>
  <List className='!-mt-2'>
<Link to="myaccount" ><ListItemButton className={`text-[15px]  flex items-center gap-3 hover:bg-gray-100 ${optionSelect === "/user/myaccount" ? "!bg-[#ff5252]" :""} `} >
  <IoMdPerson className="text-2xl" />
My Account
</ListItemButton>
</Link>
  <Link to="address" >   <ListItemButton className={`text-[15px] mt-3 ml-4 flex items-center gap-3 ${optionSelect === "/user/address" ? "!bg-[#ff5252]" :""} `} >
 <MdLocationPin className="text-2xl"/> Address
</ListItemButton>
</Link> 
 <Link to="orders"> <ListItemButton className={`text-[15px] mt-3 ml-4 flex items-center gap-3 ${optionSelect === "/user/orders" ? "!bg-[#ff5252]" :""}`}  >
 <IoBagCheckOutline className="text-2xl" /> Orders
</ListItemButton>
</Link> 
 <Link to="mylist" ><ListItemButton  className={`text-[15px] mt-3 ml-4 flex items-center gap-3 ${optionSelect === "/user/mylist" ? "!bg-[#ff5252]" :""}`} >
 <IoIosHeartEmpty className="text-2xl" /> My List
</ListItemButton>
</Link> 
 <ListItemButton className={`text-[15px] mt-3 ml-4 flex items-center gap-3 mb-4 ${optionSelect === "logout" ? "!bg-[#ff5252]" :""}`} >
 <IoIosLogOut className="text-2xl" /> Logout
</ListItemButton>
</List>
</div>


</div>

<Outlet/>

    </div>
  )
}

export default UserAccountLayout