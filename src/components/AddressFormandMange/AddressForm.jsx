import React, {  useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import TextField from '@mui/material/TextField';
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css"; 
import {motion} from "framer-motion"
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Divider } from '@mui/material';

const AddressForm = ({onClose}) => {
     
      const [phone, setPhone] = useState("");
      const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='relative'>
       <motion.div
    
    animate={{opacity:[0,1] ,x:[500,0]}}
    transition={{duration:0.7 }}
      
      className=' rounded-md '>
        <form className='form w-full'>
          <div className='flex justify-between items-center w-full mb-1'>
            <h1 className='text-lg font-semibold'>Add Delivery Address</h1>
            <MdOutlineClose onClick={onClose}
              className='text-2xl cursor-pointer hover:bg-red-500 rounded '
           
            />
          </div>
       <Divider/>
          <div className='flex flex-col gap-4 mt-4 '>

<TextField id="outlined-basic" label="Address Line 1" variant="outlined"  size="small" required />
<TextField id="outlined-basic" label="City" variant="outlined" size="small" required/>
<TextField id="outlined-basic" label="State" variant="outlined" size="small" required />
<TextField id="outlined-basic" label="Pincode" variant="outlined" size="small" required />
<TextField id="outlined-basic" label="Country" variant="outlined" size="small" required />
 <PhoneInput defaultCountry="in" value={phone} onChange={(phone) => setPhone(phone)}className="custom-phone-input z-[100] relative" required/>
<TextField id="outlined-basic" label="Landmark" variant="outlined" size="small" />


  <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group " className='!text-gray-500'>Address Type</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <div className='flex'>
        <FormControlLabel value="female" control={<Radio />} label="home" />
        <FormControlLabel value="male" control={<Radio />} label="office" />
        </div>
      </RadioGroup>
    </FormControl>
<div className='flex justify-center items-center'>
<Button className='!w-full !bg-[#ff5252] !text-white' onClick={onClose} >Save</Button>
</div>
          </div>

    
        </form>
      </motion.div>
    </div>
  )
}

export default AddressForm
