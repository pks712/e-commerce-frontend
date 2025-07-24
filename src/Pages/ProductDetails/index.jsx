import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProductZoom from '../../components/productZoom';
import ProductInfoDetails from '../../components/productInfoDetails/productInfoDetails';
import ProductDisReview from '../../components/ProductinfoDisReview/productDisReview';
import RelatedProduct from '../../components/RelatedProduct/RelatedProduct';





const ProductDetails = () => {

 const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/"  className='link'>
   Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
  
      className='link'
    >
   Fashion
    </Link>,
  
  ];



  return (
    <>

    <div className='py-5'>
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
   </div>

   <section className='bg-white py-5'>
    <div className='mx-auto flex gap-4'>
        <div className='productZoomContainer w-[40%] min-h-[500px] relative  '>
    <ProductZoom />
        </div>
        <div className='productInfoDetails w-[60%] min-h-[500px] relative  mt-8 '>
    <ProductInfoDetails/>
        </div>
       
    </div>


<div className='mt-4 '>
<ProductDisReview />
</div>

<div>
  <RelatedProduct />
</div>


</section>
</>
  )
}

export default ProductDetails