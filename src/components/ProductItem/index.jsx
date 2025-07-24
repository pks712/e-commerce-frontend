import React, { useContext, useState } from 'react';
import product1 from "../../assets/products1.jpg";
import product11 from "../../assets/product11.jpg";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";

import { MyContext } from '../../App';

const labels = {
  0.5: 'Useless', 1: 'Useless+', 1.5: 'Poor', 2: 'Poor+',
  2.5: 'Ok', 3: 'Ok+', 3.5: 'Good', 4: 'Good+',
  4.5: 'Excellent', 5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const ProductItem = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
 

 const context = useContext(MyContext)


  return (
    <>
      <div className='productItem'>
      
       <div className='border-2 border-gray-200 rounded-md ml-1 shadow-md bg-white overflow-hidden'>
          <div className='imgWrapper overflow-hidden rounded-md w-full relative group'>
        <Link to="/productDetails"> 
              <img src={product1} className='w-full h-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' alt="product" />
              <img src={product11} className='w-full h-auto' alt="product" />
         </Link>  

            <span className='discount absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-md p-1'>10%</span>
            <div className='action absolute top-[15px] right-[10px] z-50 flex flex-col items-center gap-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
              <Button className='!w-[30px] !h-[30px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white' sx={{minWidth:"unset"}}><IoMdHeartEmpty /></Button>
              <Button className='!w-[30px] !h-[30px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white'sx={{minWidth:"unset"}}><IoIosGitCompare /></Button>
              <Button  className='!w-[30px] !h-[30px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white'sx={{minWidth:"unset"}} onClick={()=>context.setOpenZoomProduct(true)}><AiOutlineFullscreen /></Button>
            </div>
          </div>

          <div className='info p-3 bg-[#f1f1f1]'>
       <Link to="/productDetails">       <h6 className='text-[12px] link'>inkCLAFOUTIS</h6>
            <h3 className='text-[16px] font-medium mt-2 link'>inkMen Alias-N Regular ...</h3>
            </Link>  
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(e, newValue) => setValue(newValue)}
                onChangeActive={(e, newHover) => setHover(newHover)}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            </Box>
            <div className='flex items-center gap-4'>
              <span className='line-through text-gray-500 text-[14px]'>$58.00</span>
              <span className='text-red-500 font-bold'>$55.00</span>
            </div>
          </div>
        </div>
        
      </div>

    </>
  );
};

export default ProductItem;
