import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import './shopCategory.css'
import Item from '../components/item/Item'
import arrow from '../components/assets/icons/downArrow.png'


const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);

  return (
   <div className="shop-Category">
    <img className='banner' src={props.banner} alt="" />
    <div className="sc-Isort">
      <p>
        <span>Showing 1-12</span> out of 24 products
      </p>
      <div className="sc-sort">
        Sort by <img src={arrow} alt="" />
      </div>
    </div>
    <div className="sc-products">
      {all_products.map((item,i)=>{
         if(props.category === item.category){
          return <Item key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}/>
         }
         else{
          return null;
         }
      })}
    </div>
    <div className='sc-loadmore'>
        Explore More
    </div>
   </div>
  )
}

export default ShopCategory