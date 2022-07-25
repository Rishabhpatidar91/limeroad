import React from 'react'

const FilterOptions = (props:any) => {
  return (
    <>
      <div id="accordion">
  <div className="card ">
    <div className="card-header" id="headingOne" style={{display:"flex", justifyContent:"start",textDecoration:"none"}}>
      <h5 className="mb-0">
        <button className="btn btn-link"  data-toggle="collapse" data-target={`#${props.ids}`} aria-expanded="true" aria-controls="collapseOne">
          {props.filterhead}
        </button>
      </h5>
    </div>

    <div id={props.ids} className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
       <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"0px"}}>
        {props.filteroption.map((item:any,index:number)=>{
            return <li><input type="checkbox" name={item}/> <span style={{marginLeft:"5px"}}> {item} </span></li>
        })}
       </ul>
      </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default FilterOptions