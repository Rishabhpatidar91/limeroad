import React from 'react'
import Submenu from './Submenu'
import {FiEdit2} from "react-icons/fi"
import {AiOutlineSearch} from "react-icons/ai"
import {IoMdCart} from "react-icons/io";
import {RiUser3Fill} from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cat = ["WOMEN", "MEN", "KIDS", "HOME", "OFFERS"];
  const subm = ["mi a1", "iphone 5s", "iphone 6s", "iphone 7s"];
  return (
    <>
     <nav className="navbar navbar-expand-lg ">
 <div className="container-fluid">
  <Link className="navbar-brand" to="/home" >LimeRoad</Link>
  {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="collapse navbar-collapse" id="main_nav">
	<ul className="navbar-nav">
		<Submenu   category={cat} 
    // submenu={subm}
      />
	</ul>
  </div>
  <ul className='nav_options' > 
    <li><div> <FiEdit2/> </div>  <div>ScrapBook</div> </li>
    <li><div> <AiOutlineSearch/> </div>  <div>Search</div> </li>
    <li><div> <IoMdCart/> </div>  <div>Cart</div> </li>
    <li><div> <RiUser3Fill/> </div>  <div>User</div> </li>

  </ul>
   </div>
 
</nav>
    </>
  )
}

export default Navbar