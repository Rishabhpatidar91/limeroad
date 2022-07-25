import React from 'react'
import Banner from '../../components/home/Banner'
import Navbar from '../../components/navbar/Navbar'
import "./home.css";
import Subcategory from '../../components/navbar/Subcategory'
import BannerCard from '../../components/home/BannerCard';

const Home = () => {
  return (
    <>
    <div className='home container-xxl'>
      <div className='container-lg mx-auto '>
    <div className='gender_type'> <span> WOMAN </span>  <span> MAN </span> </div>
    <Subcategory/>
    <Banner/>
    <BannerCard/>
    </div>
    </div>
    </>
  )
}

export default Home