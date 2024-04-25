import React, { useContext } from 'react'
import './productDisplay.css'
import starImg from '../assets/icons/starIcon.png'
import starDullImg from '../assets/icons/StarIconDull.jpg'
import  {ShopContext} from '../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="p-display">
       <div className="p-left">
            <div className="p-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="p-img">
             <img className='p-main-img' src={product.image} alt="" />
            </div>
       </div>
       <div className="p-right">
            <h1>{product.name}</h1>
            <div className="p-star">
            <img src={starImg} alt="" />
            <img src={starImg} alt="" />
            <img src={starImg} alt="" />
            <img src={starImg} alt="" />
            <img src={starDullImg} alt="" />
            <p>(122)</p>
            </div>
            <div className="pr-prices">
                <div className="p-oldprice">${product.old_price}</div>
                <div className="p-newprice">${product.new_price}</div>
            </div>
            <div className="p-descr">

            </div>
            <div className="p-size">
                <h1>Select size</h1>
                <div className="p-selectSize">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='p-cate'><span>Category :</span> {product.category}, {product.name} </p>
            <p className='p-cate'><span>Tags :</span>Modern, latest </p>
       </div>
    </div>
  )
}

export default ProductDisplay