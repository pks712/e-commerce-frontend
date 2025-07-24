import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import CategoriesPanel from "./CategoriesPanel.jsx";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ListItemButton from "@mui/material/ListItemButton";

const Navigation = () => {
    const [isOpenPanel ,setIsOpenPanel] = useState(false);

const OpenCategoriesPanel = (state)=>{
 setIsOpenPanel(state);
}



  return (
     <>
    <nav className="py-1">
      <div className="container flex items-center justify-between">
        {/* LEFT SECTION */}
        <div className="w-[30%]">
          <button className="flex items-center justify-between gap-5 text-black font-bold cursor-pointer hover:bg-gray-300 px-4 py-3 rounded-md w-full" onClick={() => OpenCategoriesPanel(true)}>
            <div className="flex items-center gap-3">
              <HiOutlineMenuAlt1 className="text-2xl" />
              <span>SHOP BY CATEGORIES</span>
            </div>
            <TfiAngleDown className="text-sm" />
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-[70%]">
          <ul className="list-none flex items-center gap-5 ml-10">
          <li className="relative group/fashion">
  <Link to="#" className="  hover:bg-gray-200 group-hover/fashion:text-red-500">FASHION</Link>

  {/* FIRST LEVEL DROPDOWN */}
  <ul className="absolute top-full left-0 bg-white shadow-md rounded-md mt-1 w-40 hidden group-hover/fashion:block z-10">

    {/* WOMEN SUBMENU */}
    <li className="relative group/women">
  <Link
    to="#"
    className="link block px-4 py-2 group-hover/women:text-red-500 group-hover/women:bg-black hover:bg-gray-100 transition-colors duration-200"
  >
    Women
  </Link>

  {/* SECOND LEVEL DROPDOWN FOR WOMEN */}
  <ul className="absolute left-full top-0 bg-white shadow-md rounded-md mt-0 w-40 hidden group-hover/women:block z-20">
    <li>
      <Link to="#" className="link block px-4 py-2 hover:bg-gray-100">Sarees</Link>
    </li>
    <li>
      <Link to="#" className="link block px-4 py-2 hover:bg-gray-100">Tops</Link>
    </li>
    <li>
      <Link to="#" className="link block px-4 py-2 hover:bg-gray-100">Jeans</Link>
    </li>
  </ul>
</li>


    {/* GIRLS SUBMENU */}
    <li className="relative group/girls">
      <Link to="#" className="link block px-4 py-2 group-hover/girls:bg-black group-hover/girls:text-red-600  hover:bg-gray-100">Girls</Link>

      {/* SECOND LEVEL DROPDOWN FOR GIRLS */}
      <ul className="absolute left-full top-0 bg-white shadow-md rounded-md mt-0 w-40 hidden group-hover/girls:block z-20">
        <li><Link to="#" className=" link block px-4 py-2 hover:bg-gray-100">Kurtas & Suits</Link></li>
        <li><Link to="#" className="link block px-4 py-2 hover:bg-gray-100">Tops</Link></li>
        <li><Link to="#" className="link block px-4 py-2 hover:bg-gray-100">Kurta Sets</Link></li>
      </ul>
    </li>

    <li><Link to="#" className="link block px-4 py-2 hover:bg-gray-100">Men</Link></li>
    <li><Link to="#" className="link block px-4 py-2 hover:bg-gray-100">Kids</Link></li>
  </ul>
</li>


               

            <li>
              <Link to="/about" className="link transition">ELECTRONICS</Link>
            </li>
            <li>
              <Link to="/shop" className="link transition">BAGS</Link>
            </li>
            <li>
              <Link to="/contact" className="link transition">FOOTWEAR</Link>
            </li>
             <li>
              <Link to="/contact" className="link transition">GROCERIES</Link>
            </li>
             <li>
              <Link to="/contact" className="link transition">BEAUTY</Link>
            </li>
            <li>
              <Link to="/contact" className="link transition">WELLNESS</Link>
            </li>
             <li>
              <Link to="/contact" className="link transition">JEWELIERY</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <CategoriesPanel OpenCategoriesPanel ={OpenCategoriesPanel} isOpenPanel ={isOpenPanel}/>
</>
  );
};

export default Navigation;
