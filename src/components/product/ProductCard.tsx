import { WhatsApp } from '@mui/icons-material'
import React from 'react'
import { FiHeart } from 'react-icons/fi'
import {ImWhatsapp} from "react-icons/im"
import "./product.css"

const ProductCard = () => {
    return (
        <>
            <div className='P-0 H-100'>
            <img src="https://img3.junaroad.com/uiproducts/17275041/pri_175_p-1638800076.jpg" width="100%" height="100%" />
            <div className='offer_div_pic'><span>OFFER</span> BUY 1 Get 1 Free</div>
           <div className='d-flex justify-content-around align-items-center'>
            <div>
                 <div className='fs-6 text-start'> <span>$ 999 </span> <span> $ 1698 </span> <span> 41% Off</span></div>
                  <p className=' text-start m-0' style={{fontSize:"13px"}}>By Friskers </p>
             </div>
             <div>
                <span className='fs-4 ' style={{color:"red"}}> <FiHeart/> </span> &nbsp;
                <span className='fs-4 ' style={{color:"green"}}> <ImWhatsapp/> </span>
             </div>
             </div>
            </div>
        </>
    )
}

export default ProductCard