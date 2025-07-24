import React from 'react'
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiKeyReturnLight } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { IoGiftSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { CiChat1 } from "react-icons/ci";
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BsFacebook } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

import footer1 from "../../assets/footer1.png";
import footer2 from "../../assets/footer2.png";
import footer3 from "../../assets/footer3.png";
import footer4 from "../../assets/footer4.png";
import footer5 from "../../assets/footer5.png"
const Footer = () => {
  return (
 <>

    <footer className='py-6 bg-gray-100'>
 <div className='container' >
    <div className='flex items-center justify-center gap-2'>
<div className='col1 w-[20%] flex flex-col items-center justify-center  group  '>
<MdOutlineLocalShipping  className='text-[40px] group-hover:text-[#ff5252] transition-all group-hover:-translate-y-1 duration-300'/>
<h2 className='text-[18px] text-gray-700  font-[600] mb-2 '>Free Shipping</h2>
<p className='text-[12px] text-gray-500  '>For all Orders Over $100</p>
</div>
<div className='col2 w-[20%] flex flex-col items-center justify-center group '>
  <PiKeyReturnLight className='text-[40px] group-hover:text-[#ff5252] transition-all group-hover:-translate-y-1 duration-300' />  
  <h2 className='text-[18px] text-gray-700 font-[600] mb-2 '>30 Days Returns</h2>
<p className='text-[12px] text-gray-500  '>
For an Exchange Product</p>
</div>
<div className='col3 w-[20%] flex flex-col items-center justify-center group'>
    <MdOutlinePayment className='text-[40px] group-hover:text-[#ff5252] transition-all group-hover:-translate-y-1 duration-300' />
    <h2 className='text-[18px]  text-gray-700 font-[600] mb-2'>Secured Payment</h2>
<p className='text-[12px] text-gray-500  '>Payment Cards Accepted</p>
</div>
<div className='col4 w-[20%] flex flex-col items-center justify-center group'>
    <IoGiftSharp className='text-[40px] group-hover:text-[#ff5252] transition-all group-hover:-translate-y-1 duration-300' />
    <h2 className='text-[18px] text-gray-700 font-[600] mb-2'>Special Gifts</h2>
<p className='text-[12px] text-gray-500  '>Our First Product Order</p>
</div>
<div className='col5 w-[20%] flex flex-col items-center justify-center group '>
    <BiSupport  className='text-[40px] group-hover:text-[#ff5252] transition-all group-hover:-translate-y-1 duration-300'/>
    <h2 className='text-[18px] text-gray-700 font-[600] mb-2'>Support 24/7</h2>
<p className='text-[12px] text-gray-500  '>Contact us Anytime</p>
</div>

    </div>
    <br />
      <br />
    <hr className="text-gray-500" />

    <div className='footer flex  py-8'>
        <div className='part1 w-[35%]'>
            <h2 className='text-[20px] font-[600] mb-4'>Contect Us</h2>
            <p className='text-[14px] font-[400] pb-4 text-gray-500'>Classyshop - Mega Super Store <br/>
507-Union Trade Centre France</p>
<Link to="mailto:sales@yourcompany.com" className='text-[14px] text-gray-500 link'>sales@yourcompany.com</Link>
<span className='text-[22px] font-[600] block mt-3 text-[#ff5252]'>(+91) 9876-543-210</span>


<div className='flex items-center mt-5 gap-2'>
<CiChat1 className='text-[45px] text-[#ff5252]'/>
<span className='text-[16px] font-[600]'>
    Online Chat <br/>
Get Expert Help
</span>
</div>
        </div>
        <div className='part2 w-[30%] flex'>
            <div className='part2_col1'>
 <h2 className='text-[20px] font-[600] mb-4'>Products</h2>

 <ul className='list-none flex flex-col gap-3'>
 <Link to="/Stores" className='link text-[14px] text-gray-500'> <li>Prices drop</li></Link>
   <Link to="/Stores" className='link text-[14px] text-gray-500'> <li>New products</li></Link>
    <Link to="/Stores"className='link text-[14px]  text-gray-500'> <li>Best sales</li></Link>
   <Link to="/Stores"className='link text-[14px]  text-gray-500'> <li>Sitemap</li></Link>
    <Link to="/Stores"className='link text-[14px]  text-gray-500'> <li>Stores</li></Link>
   
 </ul>
            </div>
        </div>
        
  <div className='part2 w-[30%] flex'>
            <div className='part2_col1'>
 <h2 className='text-[20px] font-[600] mb-4'>Our company</h2>

 <ul className='list-none flex flex-col gap-3'>
 <Link to="/Stores" className='link text-[14px] text-gray-500'> <li>Delivery</li></Link>
   <Link to="/Stores" className='link text-[14px] text-gray-500'> <li>Legal Notice</li></Link>
    <Link to="/Stores"className='link text-[14px]  text-gray-500'> <li>Terms and conditions of use</li></Link>
   <Link to="/Stores"className='link text-[14px]  text-gray-500'> <li>About us</li></Link>
    <Link to="/Stores"className='link text-[14px]  text-gray-500'> <li>Secure payment</li></Link>
       <Link to="/Stores"className='link text-[14px]  text-gray-500'> <li>Login</li></Link>
 </ul>
            </div>
        </div>
<div className='part2 w-[35%] flex flex-col '>
        <h2 className='text-[20px] font-[600] mb-4'>Subscribe to newsletter</h2>
        <p className='text-[14px]'>Subscribe to our latest newsletter to get <br />news about special discounts.</p>

<form className='mt-5'>
    <input className='w-full h-[45px] border border-gray-400 outline-none pl-4 pr-4 rounded-sm focus:border-black' placeholder='Your Email Address'></input>
    <Button type='sumbit' className='!mt-3 !bg-[#ff5252] !text-white hover:!bg-black'>SUBSCRIBE</Button>

  <span>
     <FormControlLabel control={<Checkbox />} label="I agree to the terms and conditions and the privacy  policy" />

  </span>
</form>

</div>

    </div>
    </div>       

</footer>


<div className='bottomStrip border-t border-black p-2'>
<div className='container flex items-center justify-between'>
<ul className='list-none flex items-center justify-between gap-4'>
    <Link> <li><BsFacebook className='text-[30px]  hover:text-[#ff5252]' /></li></Link>
   <Link><li><FiYoutube className='text-[30px]  hover:text-[#ff5252]'  /></li></Link> 
    <Link><li><FaPinterestP className='text-[30px] hover:text-[#ff5252]'  /></li> </Link>
   <Link> <li><FaInstagram className='text-[30px] hover:text-[#ff5252]'  /></li></Link>
</ul>
<p className='text-[14px] border-black'>© 2024 - Ecommerce Template</p>
<div className='flex gap-0 justify-end'>
    <img src={footer1}></img>
<img src={footer2}></img>
<img src={footer3}></img>
<img src={footer4}></img>
<img src={footer5}></img>
</div>


</div>
</div>
 </>
  )
}

export default Footer;