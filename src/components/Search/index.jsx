import React from 'react'
import "./Search.css";
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';

const Search = () => {
  return (
    <div className='searchBox w-full h-[50px] bg-[#e5e5e5] rounded-sm p-2 flex items-center justify-center'>
        <input type ="text " placeholder='Search for products...' className='w-full h-[35px] focus:outline-none bg-none p-2 text-[15px]'></input>

<button className='flex items-center justify-center text-2xl  w-12 h-10 cursor-pointer hover:bg-gray-300 rounded-full z-50'>
<IoSearch  className='text-'/>
</button>

    </div>
  )
}

export default Search