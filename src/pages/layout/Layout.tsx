import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import ProductDetail from '../../components/productdetail/ProductDetail'
import Products from '../../products/Products'
import Home from '../home/Home'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/productdetail" element={<ProductDetail />} />
            </Routes>
        </>
    )
}

export default Layout