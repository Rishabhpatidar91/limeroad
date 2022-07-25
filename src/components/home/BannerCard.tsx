import React from 'react'
import "../../pages/home/home.css"
import {FiHeart} from "react-icons/fi"
import {ImWhatsapp} from "react-icons/im"

const BannerCard = () => {

    const list = ["1", "2", "3", "4", "5", "6", "7"]

    return (
        // <div classNameName='grid'> BannerCard </div>
        <>
            <div className="w-100">
                <div className="row ">
                  {list.map((item, index)=>{
                    return   <div className="col-md-6 col-lg-4 col-sm-12 g-3 m-2 p-2 " style={{backgroundColor:"wheat"}}>
                        <p className='text-start pt-2 fs-5'> COMFIEST #NEWARRIVAL </p>
                        <div >  <img src="https://media.istockphoto.com/photos/man-runner-jogger-running-isolated-picture-id515232220?k=20&m=515232220&s=612x612&w=0&h=ChIGqf3_SqZviAsPBXkHCaaSQcVJZGIXZlocLxQyoMw=" width="100%" height="300px" className='  bg-primary' /> </div>
                        <div className='d-flex bg-warning justify-content-between px-1 align-items-center '>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPPs2DQ42qFt8PkbDPXyW97E7AsosKBXVpw&usqp=CAU" height="30px" width="30px" style={{ borderRadius: "50%" }} />
                            <div>
                                <div style={{fontSize:"12px", textAlign:"left", fontWeight:"500"}}> By Kanika.Crystal </div>
                                <div style={{fontSize:"12px", textAlign:"left", fontWeight:"500", color:"grey"}}> 27K followers </div>
                            </div>
                            <div> <div className='banner_card_icon shadow' style={{color:"red"}}> <FiHeart/> </div>    <div className='banner_card_text' > 36 Likes</div> </div>
                            <div> <div className='banner_card_icon shadow' style={{color:"green"}}> <ImWhatsapp/> </div>    <div className='banner_card_text' > 16 shares</div> </div>
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default BannerCard