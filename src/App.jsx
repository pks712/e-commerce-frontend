import './App.css'

import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/index.jsx'
import ProductListing from './Pages/ProductListing/index.jsx'

import ProductDetails from './Pages/ProductDetails/index.jsx'
import { createContext, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ZoomProductDetails from './components/ZoomProductDetails/ZoomProductDetails.jsx'
import Login from './Pages/Regi-Login/Login.jsx'
import Signup from './Pages/Regi-Login/Signup.jsx'
import MainLayout from './Pages/MainLayout/MainLayout.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Drawer from '@mui/material/Drawer'
import CartDrawer from './Pages/Cart/CartDrawer.jsx'
import CheckOut from './Pages/Checkout/CheckOut.jsx'
import AddressForm from './components/AddressFormandMange/AddressForm.jsx'
import AddreshSave from './components/addreshsave.jsx'
import UserAccountLayout from './UserAccountLayout/UserAccountLayout.jsx'
import MyAccount from './components/userDetails/MyAccount.jsx'
import MyList from './components/userDetails/MyList.jsx'
import UserAddress from './components/userDetails/UserAddress.jsx'
import UserOrders from './components/userDetails/UserOrders.jsx'


export const MyContext = createContext();

function App() {
  const [openZoomProduct, setOpenZoomProduct] = useState(false);
   const [openCartProduct, setOpenCartProduct] = useState(false);
    const [openAddressDrawer, setOpenAddressDrawer] = useState(false);
  const handleCloseZoomProduct = () => setOpenZoomProduct(false);
   const handleCloseCartProduct = () => setOpenCartProduct(false);
     const handleCloseAddressDrawer = () => setOpenAddressDrawer(false);
  const values = { setOpenZoomProduct , setOpenCartProduct ,setOpenAddressDrawer};

  return (
    <>
      <MyContext.Provider value={values}>
        <Routes>

       
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/productlisting" element={<ProductListing />} />
            <Route path="/productDetails" element={<ProductDetails />} />
             <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/user" element={<UserAccountLayout />} >
                    <Route path="myaccount" element={<MyAccount />} />
                      <Route path="mylist" element={<MyList/>} />
                        <Route path="address" element={<UserAddress />} />
                          <Route path="orders" element={<UserOrders />} />
              
              </Route>
          </Route>

    
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
<Route path="/addresss" element={<AddreshSave />} />
        </Routes>

  
        <Dialog
  open={openZoomProduct}
  onClose={handleCloseZoomProduct}
  sx={{ '& .MuiDialog-paper': { width: '1200px', maxWidth: 'none' } }}
>
  <DialogContent>
    <ZoomProductDetails onClose={handleCloseZoomProduct} />
  </DialogContent>
</Dialog>

           <Drawer
            anchor="right"
          open={openCartProduct}
          onClose={handleCloseCartProduct}
       
        >
          <DialogContent>
           <CartDrawer  onClose={handleCloseCartProduct}/>
          </DialogContent>
        </Drawer>
         <Drawer
            anchor="right"
          open={openAddressDrawer}
          onClose={handleCloseAddressDrawer}
           sx={{
    '.MuiDrawer-paper': {
      width: '500px', 
    }
  }}
     
        >
          <DialogContent>
           <AddressForm  onClose={handleCloseAddressDrawer}/>
          </DialogContent>
        </Drawer>
      </MyContext.Provider>
    </>
  );
}

export default App;
