import React, { useEffect, useState } from 'react'
import './collecions.css'
import Item from '../item/Item'

const Collecions = () => {

  const[new_collections,setNewCollection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((resp)=>resp.json())
    .then((data)=>setNewCollection(data))

  },[])

  return (
   <div className="collections">
    <h1>NEW COLLECTIONS</h1>
    <hr />
    <div className="c-item">
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