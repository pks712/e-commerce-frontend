import React from 'react'
import ProductZoom from '../productZoom'
import ProductInfoDetails from '../productInfoDetails/productInfoDetails'
import { MdOutlineClose } from 'react-icons/md'

const ZoomProductDetails = ({onClose}) => {
  return (
    <div className='flex  relative'>
        <div  className='flex mt-5'>
            <ProductZoom/>


<ProductInfoDetails/>

        </div>


<div className='absolute top-0 right-0  '>
<MdOutlineClose className='text-2xl hover:bg-red-400 rounded' onClick={onClose} />
</div>
    </div>
  )
}

export default ZoomProductDetails