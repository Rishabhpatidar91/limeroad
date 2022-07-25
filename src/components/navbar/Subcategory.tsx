import React from 'react'
import "./navbar.css"

const Subcategory = () => {

    const subcat = [
        {pic:"pic", name:"name"},
        {pic:"pic", name:"name"},
        {pic:"pic", name:"name"},
        {pic:"pic", name:"name"},
        {pic:"pic", name:"name"},
        {pic:"pic", name:"name"},
        {pic:"pic", name:"name"},
        {pic:"pic", name:"name"},
        {pic:"pic", name:"name"},
        {pic:"pic", name:"name"}
    ]

    return (
        <div className='container-lg d-flex justify-flex-start mt-4 subcategory_main'>
            <div>
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="hel" style={{height:"70px", width:"70px", padding:"1px"}} className=" subcategory_img border-right-1 border-primary" />
                <div> name </div>
            </div>
            {/* <span style={{height: "50px",  marginTop: "15px",width: "2px", background:"aquamarine"}}></span> */}
            <ul className='subcategory_list'>
               {subcat.map((item:any, index:number)=>{
                return <li>
                    {/* <div> {item.pic} </div> */}
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt={item.pic} className="subcategory_img" />
                    <p style={{fontSize:"12px"}}> {item.name} </p>
                </li>
               })} 
            </ul>

        </div>
    )
}

export default Subcategory