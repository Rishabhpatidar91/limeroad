import React from 'react'

const Submenu = (props:any) => {
  return (
   <>
  {props.category.map((data:any, index:number)=>{
    return    <li className="nav-item active"> <a className="nav-link" href="#"> {data} </a>  <ul className="dropdown-menu">
			 {/* {props.submenu.map((item:any, index:any)=>{
                 return  */}
                 <li><a className="dropdown-item" href="#"> "item"  </a></li>
             {/* })}  */}
		    </ul> </li>
        })}
   </>
  )
}

export default Submenu