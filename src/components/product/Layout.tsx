import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../../products/Products'

const Layout = () => {
  return (
   <>
    <div className='row product_template'> 
     <div className='col-sm-2 d-none d-sm-block filter_div'> Filter  </div>
     <div className='col-sm-10  h-100  bg-success'>
     <Routes>
      <Route path="/items" element={<Products/>} />
     </Routes>
     </div>
     </div>
   </>
  )
}

export default Layout