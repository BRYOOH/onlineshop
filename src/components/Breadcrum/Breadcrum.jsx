import React from 'react'
import './breadcrum.css'
import arrow_icon from '../assets/icons/downArrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="breadCrum">
        HOME <img className='b-img' src={arrow_icon} alt="" />
        SHOP <img className='b-img' src={arrow_icon} alt="" />
        {product.category} <img className='b-img' src={arrow_icon} alt="" />
        {product.name} <img className='b-img' src={arrow_icon} alt="" />
    </div>
  )
}

export default Breadcrum