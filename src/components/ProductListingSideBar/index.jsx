import React, { useState } from 'react'
import "./SiderBar.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';


const ProductListingSideBar = () => {
     const [openCategoryFilter, setOpenCategoryFilter] = useState(false);
      const [openAvalitblityFilter, setOpenAvalitblityFilter] = useState(false);
       const [openSizeFilter, setOpenSizeFilter] = useState(false);
       const handleToggelCategoryFilter = () => {
   setOpenCategoryFilter(!openCategoryFilter);
  };
      const handleToggelAvalitblityFilter = () => {
   setOpenAvalitblityFilter(!openAvalitblityFilter);
  };
    const handleToggelSizeFilter = () => {
   setOpenSizeFilter(!openSizeFilter);
  };


  return (
    <aside className='sidebar py-5 flex flex-col gap-2'>
   <div className="box">
    <ListItemButton
          className='flex items-center gap-2'
            onClick={handleToggelCategoryFilter}
            sx={{
              bgcolor:openCategoryFilter ? "black" : "transparent", // background color
              color: openCategoryFilter? "red" : "inherit", // text color blue if active
              fontWeight:openCategoryFilter? "bold" : "normal", // bold text
               minHeight:32,
               py:0.001 ,
            
            }}
          >
           <h3 className='text-[16px] font-[600]'>Shop by Category</h3>{openCategoryFilter ? <ExpandLess/> : <ExpandMore />}
          </ListItemButton>
    <Collapse in={openCategoryFilter} >
<div className="scroll pl-2 mt-2">
   <FormGroup>
  <FormControlLabel control={<Checkbox/>} label="Fashion"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
    <FormControlLabel control={<Checkbox/>} label="ELECTRONICS"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
      <FormControlLabel control={<Checkbox/>} label="BAGS"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
        <FormControlLabel control={<Checkbox/>} label="FOOTWEAR"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
          <FormControlLabel control={<Checkbox/>} label="GROCERIES"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
            <FormControlLabel control={<Checkbox/>} label="BEAUTY"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />

              <FormControlLabel control={<Checkbox/>} label="WELLNESS"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                <FormControlLabel control={<Checkbox/>} label="JEWELIERY"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />

                  </FormGroup>
</div>
</Collapse>
   </div>
     <div className="box">
    <ListItemButton
          className='flex items-center gap-2'
            onClick={handleToggelAvalitblityFilter}
            sx={{
              bgcolor: openAvalitblityFilter? "black" : "transparent", // background color
              color: openAvalitblityFilter ? "red" : "inherit", // text color blue if active
              fontWeight: openAvalitblityFilter? "bold" : "normal", // bold text
               minHeight:32,
               py:0.001 ,
            
            }}
          >
           <h3 className='text-[16px] font-[600]'>Avaliablility</h3>{openAvalitblityFilter  ? <ExpandLess/> : <ExpandMore />}
          </ListItemButton>
    <Collapse in={openAvalitblityFilter} >
<div className="scroll pl-2 mt-2">
   <FormGroup>
  <FormControlLabel control={<Checkbox/>} label="Available (17)"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
    <FormControlLabel control={<Checkbox/>} label="In Stock (10)"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
      <FormControlLabel control={<Checkbox/>} label="Not available (17)"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
    
                  </FormGroup>
</div>
</Collapse>
   </div>
    <div className="box">
    <ListItemButton
          className='flex items-center gap-2'
            onClick={handleToggelSizeFilter}
            sx={{
              bgcolor: openSizeFilter? "black" : "transparent", // background color
              color: openSizeFilter ? "red" : "inherit", // text color blue if active
              fontWeight: openSizeFilter? "bold" : "normal", // bold text
               minHeight:32,
               py:0.001 ,
            
            }}
          >
           <h3 className='text-[16px] font-[600]'>Size</h3>{openSizeFilter  ? <ExpandLess/> : <ExpandMore />}
          </ListItemButton>
    <Collapse in={openSizeFilter} >
<div className="scroll pl-2 mt-2">
   <FormGroup>
  <FormControlLabel control={<Checkbox/>} label="Small"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
    <FormControlLabel control={<Checkbox/>} label="Medium"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
      <FormControlLabel control={<Checkbox/>} label="Large"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
     <FormControlLabel control={<Checkbox/>} label="XL"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
        <FormControlLabel control={<Checkbox/>} label="XXL"  sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />           
                  </FormGroup>
</div>
</Collapse>
   </div>
  <div className='box mt-3'>
       <h3 className='text-[16px] font-[600]'>Filter BY Price</h3>
    
      <RangeSlider className='mt-5'/>
      <div className='flex pt-4 pb-2 priceRnage'>
<span className='text-[14px]'>
From:<strong className='text-dark text-[14px]'>Rs:{100}</strong>
</span>
<span className='ml-auto text-[14px]'>
From:<strong className='text-dark text-[14px]'>Rs:{5000}</strong>
</span>
      </div>
  </div>
   <div className='box mt-3'>
       <h3 className='text-[16px] font-[600]'>Filter By Rating</h3>
       <div className='mt-4'>
   <div>
    <Rating name="read-only" value={5} readOnly />
   </div>
    <div>
    <Rating name="read-only" value={4} readOnly />
   </div>
    <div>
    <Rating name="read-only" value={3} readOnly />
   </div>
   
    <div>
    <Rating name="read-only" value={2} readOnly />
   </div>
   
    <div>
    <Rating name="read-only" value={1} readOnly />
   </div>
     </div>
  </div>

       </aside>
  )
}

export default ProductListingSideBar;