import React, { useContext } from 'react'
import './cartItems.css'
import { ShopContext } from '../Context/ShopContext'
import removeIcon from '../assets/icons/remove.png'


const CartItems = () => {

    const {sumTotalCart, all_products, cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className="c-items">
        <div className="c-formatMain">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className="c-format c-formatMain ">
                    <img src={e.image} alt="" className='c-img' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='c-btn'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img src={removeIcon} className='c-icon' alt="" onClick={()=>{removeFromCart(e.id)}}/>

                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="c-cartTotal">
            <div className="c-cartItems">
                <h1>Cart Total</h1>
                <div>
                    <div className="c-cartItems-total">
                        <p>Subtotal</p>
                        <p>${sumTotalCart()}</p>
                    </div>
                    <hr />
                    <div className="c-cartItems-total">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="c-cartItems-total">
                        <h3>Total</h3>
                        <h3>${sumTotalCart()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="c-promocode">
                <p>If you have a promo code,Enter it here
                </p>
                <div className="c-promoBox">
                    <input type="text" placeholder='promo code'/>
                    <button>SUBMIT </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems