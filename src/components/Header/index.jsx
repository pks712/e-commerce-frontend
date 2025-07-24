import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { MdLocationPin, MdOutlineShoppingCart } from "react-icons/md";
import { IoIosHeartEmpty, IoIosLogOut, IoMdHeartEmpty, IoMdPerson } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import Search from "../Search";
import Navigation from "./Navigation/index.jsx";
import { MyContext } from "../../App.jsx";
import { Button, List, ListItemButton } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { IoBagCheckOutline } from "react-icons/io5";
const Header = () => {

const context =useContext(MyContext)
const [showLogin,setShowLogin] = useState(true)
const [showMyAccount ,setShowMyAccount] =useState(false)
const handleMyAccount =()=>{
setShowMyAccount(!showMyAccount)
}

  return (
    <header className="bg-white fixed lg:sticky left-0 w-full top-0  z-[101]">
      <div className="top-strip py-2 border-t-[2px] border-b-[2px] border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                {" "}
                Get up to 50% off new season styles, limited time only{" "}
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    Help center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header border-b-[2px] border-gray-200 py-3">
        <div className="container flex items-center justify-between ">
          <div className="col1 flex py-4 w-[30%]">
            <div>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="flex flex-col text-2xl font-[500]">
              CLASSYSHOP
              <span className="flex gap-1">
                <span className="text-[10px] -ml-1 flex gap-2">
                  <span>B</span>
                  <span>I</span>
                  <span>G</span>
                </span>
                <span className="text-[10px] ml-3 flex gap-2">
                  <span>M</span>
                  <span>E</span>
                  <span>G</span>
                  <span>A</span>
                </span>
                <span className="text-[10px] ml-3 flex gap-2">
                  <span>S</span>
                  <span>T</span>
                  <span>O</span>
                  <span>E</span>
                  <span>R</span>
                </span>
              </span>
            </div>
          </div>
          <div className="col2 w-[40%]">
            <Search></Search>
          </div>
          <div className="col3 w-[30%] flex items-center ml-14">
            <ul className="list-none flex items-center justify-end gap-4 w-100 ">

              { showLogin ?
            (   <li>
 <div className="ml-15 relative" >
        <Button className="!w-[200px] !h-12 flex items-center gap-3 !bg-gray-300" onClick={handleMyAccount}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <div className="flex flex-col items-start justify-center">
    <h1 className="text-[14px] font-semibold -mb-1">example</h1>
    <span className="text-[13px] text-gray-600 lowercase ">example@gmail.com</span>
  </div>
</Button>

{ showMyAccount && <List className="!absolute !top-full !left-0 !bg-white !shadow-md !rounded-md !w-[200px] !z-10 ">
 <Link to="/user/myaccount" >   <ListItemButton className="text-[15px] mt-4 ml-4 flex items-center gap-3 hover:bg-gray-100" onClick={()=>setShowMyAccount(false)}>
  <IoMdPerson className="text-2xl" />
My Account
</ListItemButton>
</Link>
  <Link to="/user/address" > <ListItemButton className="text-[15px] mt-3 ml-4 flex items-center gap-3 " onClick={()=>setShowMyAccount(false)}>
 <MdLocationPin className="text-2xl"/> Address
</ListItemButton>
</Link>
 <Link to="/user/orders"><ListItemButton className="text-[15px] mt-3 ml-4 flex items-center gap-3 " onClick={()=>setShowMyAccount(false)} >
 <IoBagCheckOutline className="text-2xl" /> Orders
</ListItemButton>
</Link>
 <Link to="/user/mylist" ><ListItemButton  className="text-[15px] mt-3 ml-4 flex items-center gap-3 " onClick={()=>setShowMyAccount(false)}>
 <IoIosHeartEmpty className="text-2xl" /> My List
</ListItemButton>
</Link>
 <Link to="/"> <ListItemButton className="text-[15px] mt-3 ml-4 flex items-center gap-3 mb-4 " onClick={()=>setShowMyAccount(false)}>
 <IoIosLogOut className="text-2xl" /> Logout
</ListItemButton>
</Link>
</List>

}
 </div>
      </li>
            )
             : (
                <>
              <li>
                <button className="bg-blue-500 w-20 h-8 rounded-full hover:bg-blue-300 cursor-pointer ml-20">
                  <Link to="/login">Login</Link>
                </button>
              </li>
              <li>
                <button className="bg-blue-500 w-20 h-8 rounded-full hover:bg-blue-300 cursor-pointer ml-2">
                  <Link to="/signup">Register</Link>
                </button>
              </li>
              </>
             )
               }

              <div className="flex items-center justify-end gap-4  w-100 ">
                <li className="relative group">
                  <div className="flex items-center justify-center text-2xl rounded-full w-8 h-8 hover:bg-gray-300 cursor-pointer ml-2">
                    <IoIosGitCompare />
                  </div>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all">
                    Compare
                  </span>
                </li>
               
                <li className="relative group" >
                   <Link to ="user/mylist">
                  <div className="flex items-center justify-center text-2xl rounded-full w-8 h-8 hover:bg-gray-300 cursor-pointer">
                    <IoMdHeartEmpty />
                  </div>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all">
                    Wishlist
                  </span>
                  </Link>
                </li>

                <li className="relative group">
                  <div className="flex items-center justify-center text-2xl rounded-full w-8 h-8 hover:bg-gray-300 cursor-pointer">
                    <MdOutlineShoppingCart onClick={()=>context.setOpenCartProduct(true)} />
                  </div>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all" >
                    Cart
                  </span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>


<Navigation></Navigation>

    
      
    </header>



  );
};

export default Header;
