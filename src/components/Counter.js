import React, { useState } from 'react'

const Counter = () => {
    var [num,setNum]=useState(0)
    const changeNum=()=>{
        setNum(num++)
    }
    const changeDec=()=>{
        setNum(num--)
    }
  return (
    <div>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">{num}</label>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={changeNum}>Increament</button>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={changeDec}>Decreament</button>
                </div>
            </div>    
            </div>
        </div>
    </div>
    </div>
  )
}

export default Counter