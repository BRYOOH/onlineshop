import { createContext, useEffect, useState } from "react";



 export const ShopContext= createContext (null);

    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < 300 +1; index++) {
            cart [index] = 0;
            
        }
        return cart;
    }

const ShopContextProvider = (props) => {

    const [all_products,setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart()); 

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((resp)=>resp.json()).then((data)=>setAllProducts(data))
    },[])
  
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev
    [itemId]-1 }));
    }

    const sumTotalCart =()=>{
        let totalPrice= 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_products.find((e)=>e.id===Number(item));
                totalPrice = (itemInfo.new_price * cartItems[item]) + totalPrice;
            }
        }
        return totalPrice; 
    }

    const cartIncrem=()=>{
       let cartNo = 0;
       for(const item in cartItems){
        if(cartItems[item]>0){
               cartNo += cartItems[item];
        }
       }
       return cartNo;
    }

    const contextValue = {cartIncrem, sumTotalCart,all_products,cartItems,addToCart,removeFromCart} ;
    return(
    <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}



export default ShopContextProvider;