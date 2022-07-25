import React from 'react'
// import Carousel from 'react-elastic-carousel';


const ProductDetail = () => {
    const items = [
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'}
      ]
  return (
    <>
    <p style={{textAlign:"left", paddingLeft:"12px"}}> home » men » clothing » ethnic wear sets » black solid kurta pyjama set </p>
    <div className='row'> 
    <div className='col-6'>

    {/* <Carousel>
        {items.map((item:any) => <div key={item.id}>{item.title}</div>)}
      </Carousel> */}
        </div>
         <div className='col-6'> col-6 </div></div>
    </>
  )
}

export default ProductDetail