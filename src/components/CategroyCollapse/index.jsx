import React, { useState } from 'react'

import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
const CategoryCollapse = () => {
      const [openFashion, setOpenFashion] = useState(false);
       const handleToggelFashion = () => {
    setOpenFashion(!openFashion);
  };
  return (
    <>
      <div>
        <ul className="list-none">
          <ListItemButton
            className="flex gap-30"
            onClick={handleToggelFashion}
            sx={{
              bgcolor: openFashion ? "black" : "transparent", // background color
              color: openFashion ? "red" : "inherit", // text color blue if active
              fontWeight: openFashion ? "bold" : "normal", // bold text
            }}
          >
            <li>FASHION</li> {openFashion ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openFashion} className="ml-10">
            <ul className="list-none">
              <ListItemButton>
                <li>Men</li>
              </ListItemButton>
              <ListItemButton>
                <li>Women</li>
              </ListItemButton>
              <ListItemButton>
              
                <li>Kids</li>
              </ListItemButton>
            </ul>
          </Collapse>
          <ListItemButton>
      
            <li className="">ELECTRONICS</li>
          </ListItemButton>
          <ListItemButton>
        
            <li className="">BAGS</li>
          </ListItemButton>
          <ListItemButton>
       
            <li className="">FOOTWEAR</li>
          </ListItemButton>
          <ListItemButton>
    
            <li className="">GROCERIES</li>
          </ListItemButton>
          <ListItemButton>
        
            <li className="">BEAUTY</li>
          </ListItemButton>
            <ListItemButton>
            <li className="">WELLNESS</li>
          </ListItemButton>
          <ListItemButton>
            <li className="">JEWELIERY</li>
          </ListItemButton>
        </ul>
      </div>

    </>
  )
}

export default CategoryCollapse