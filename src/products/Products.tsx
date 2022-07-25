import React from 'react'
import FilterOptions from '../components/product/FilterOptions';
import ProductCard from '../components/product/ProductCard';
import "./product.css";
const Products = () => {
  const data = ["trending", "new", "discount", "High Price", "low price"];
  const price = ["0 - 499", "500 - 999", "1000 - 1499", "1500 - 1999", "2000 - 17999"];
  const discount = ["5%", "10%", "15%", "20%", "25%", "30%"];
  const colors = ["red", "blue", "black", "green", "purple","violet","yellow", "brown","pink","orange", "olive", "gold"];
  const size = ["S", "M", "L", "XL", "XXL","XXL" ];
  const brand = ["ZARA", "GUCCHI","VARSACE"]


  return (
    <>
     <div className='row product_template'> 
     <div className='col-sm-2 d-none d-sm-block filter_div'>
      <p className='text-start' > FILTER & SORT </p>
   
  <FilterOptions ids="sortby" filterhead="Sort By" filteroption={data}/>
  <FilterOptions ids="price" filterhead="Price" filteroption={price}/>
  <FilterOptions ids="discount" filterhead="Discount" filteroption={discount}/>
  <FilterOptions ids="colors" filterhead="Color" filteroption={colors}/>
  <FilterOptions ids="size" filterhead="size" filteroption={size}/>
  <FilterOptions ids="brand" filterhead="brand" filteroption={brand}/>
        </div>
     <div className='col-sm-10  h-100  '>
   
    <div> Home - Men -- clothing -- top gear -- t-shirts </div>
    <div className='w-75 mx-auto products'>
    <div className='row '>
        <div className='col m-2 p-0 ' style={{backgroundColor:"white"}} >  <ProductCard/> </div>
        <div className='col m-2 p-0 ' style={{backgroundColor:"white"}} > <ProductCard/> </div>
        <div className='col m-2 p-0 ' style={{backgroundColor:"white"}} > <ProductCard/> </div>
    </div>
    </div>
    
    </div>
     </div>
    </>
  )
}

export default Products