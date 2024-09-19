import React from 'react'
import data_product from '../assets/data'
import Item from '../item/Item'
import './relatedProducts.css'

const RelatedProduct = () => {
    
  return (
    <div className="r-product">
        <h1>Related Products</h1>
        <hr />
        <div className="r-productItem">
                {data_product.map ((item,i)=>{
                   return <Item key={i}
                   id={item.id} 
                   name={item.name} 
                   image ={item.image} 
                   category={item.category} 
                   new_price={item.new_price} 
                   old_price={item.old_price}/>
                    
                })}
        </div>
    </div>
  )
}

export default RelatedProduct