import React, { useState } from 'react'
import ProductListingSideBar from '../../components/ProductListingSideBar'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProductItem from '../../components/ProductItem';
import Button from '@mui/material/Button';
import { BsUiChecksGrid } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemViewList from '../../components/ProductItemViewList';
import Pagination from '@mui/material/Pagination';
import { motion, AnimatePresence } from 'framer-motion';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


const ProductListing = () => {


const [itemView,setIsItemView] =useState('grid');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

     const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} className='link'>
   Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      className='link'
    >
   Fashion
    </Link>,
  
  ];
  return (
   <section className='py-5'>
  <div className='container'>
       <Stack spacing={2}>
      
     
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  </div>
    <div className="bg-white p-3 mt-4">
         <div className="flex gap-8 ">
        <div className='sidebarwrapper w-[20%] h-full bg-white'>
             <ProductListingSideBar/>
        </div>
   <div className='rightContent w-[80%] py-3'>

    <div className='bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between '>
      <div className="col1 flex items-center gap-3">
                   <Button className='!w-[45px] !h-[45px] !min-w-[45px] !rounded-full !text-[#000] relative' onClick={()=>setIsItemView('list')} >< IoIosMenu   className={`btn-1 text-2xl absolute transition-all duration-300 ease-in-out ${itemView=== 'list'?"text-[#ff5252] scale-110 rotate-180":"text-gray-400 scale-100 rotate-0"}`}/></Button>
        <Button className='!w-[45px] !h-[45px] !min-w-[45px] !rounded-full !text-[#000]'onClick={()=>setIsItemView('grid')}><BsUiChecksGrid  className={`btn-1 text-[20px] absolute transition-all duration-300 ease-in-out ${itemView=== 'grid'?"text-[#ff5252] scale-110 rotate-y-360":"text-gray-400 scale-100 rotate-0"}`}/></Button>
<span className='text-[16px] font-[600] pl-2 text-gray-600'>There are 27 products...</span>

      </div>
     <div className="col2 ml-auto flex items-center gap-2">
  <span className='text-[16px] font-[600] text-gray-700'>Sort by:</span>

  <select
    className="border border-white outline-none bg-white rounded-md p-2 text-sm focus:border-black "
   
  >
    <option value="default" className='hover:bg-[#ff5252]'>Default</option>
    <option value="priceLowHigh" className='hover:bg-[#ff5252]'>Price: Low to High</option>
    <option value="priceHighLow" className='hover:bg-[#ff5252]'>Price: High to Low</option>
    <option value="rating" className='hover:bg-[#ff5252]'>Rating</option>
    <option value="newest" className='hover:bg-[#ff5252]'>Newest</option>
  </select>
</div>

    </div>
<AnimatePresence mode="wait">
  {itemView === 'grid' && (
    <motion.div
      key="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-4 gap-4"
    >
      {[...Array(12)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <ProductItem />
        </motion.div>
      ))}
    </motion.div>
  )}

  {itemView === 'list' && (
    <motion.div
      key="list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProductItemViewList />
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>


<div className="flex justify-center items-center p-5 mt-5">
   
    <Pagination count={10} 
     sx={{
    '& .MuiPaginationItem-root': {
      backgroundColor: '#f1f1f1', 
    },
    '& .Mui-selected': {
      backgroundColor: '#ff5252',
      color: 'ff5252',
      '&:hover': {
        backgroundColor: '#e04848',
      },
    },
  }}
   />
 
</div>
    </div>
     </div>
    </div>
 
   </section>
    
  )
}

export default ProductListing