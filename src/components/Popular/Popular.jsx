import './popular.css'

import React, { useEffect,useState } from 'react'
import Item from '../item/Item'

const Popular = () => {

  const [data_product,setDataProduct] = useState([]);

  useEffect(()=>{
    fetch('https://onlineshop-backend-63tt.onrender.com/popularinwomen')
    .then((resp)=>resp.json())
    .then((data)=>setDataProduct(data))
  },[])

  return (
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item, i)=>{
                return <Item  key={i} 
                id={item.id} 
                name={item.name}
                image={item.image}
                new_price= {item.new_price}
                old_price= {item.old_price}
                />
            })}
        </div>

    </div>
  )
}

export default Popular