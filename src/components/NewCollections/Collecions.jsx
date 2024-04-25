import React from 'react'
import './collecions.css'
import new_collections from '../assets/new_collections'
import Item from '../item/Item'

const Collecions = () => {
  return (
   <div className="collections">
    <h1>NEW COLLECTIONS</h1>
    <hr />
    <div className="c-items">
    {new_collections.map((item,i)=>{
      return <Item key={i}
      id={item.id}
      name={item.name}
      image={item.image}
      new_price={item.new_price}
      old_price={item.old_price}
      />
    })}
    </div>

   </div>
  )
}

export default Collecions