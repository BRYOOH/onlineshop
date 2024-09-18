import { createContext, useEffect, useState } from "react";



 export const ShopContext= createContext (null);

    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < 300 +1; index++) {
            cart[index] = 0;
            
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

    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/getcart',{
            method:'POST',
            headers:{
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'apllication/json',
            },
            body:"",
        }).then((resp)=>resp.json()).then((data)=>setCartItems(data));
    }
  
    const addToCart= (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
       
        if(localStorage.getItem('auth-token')){
            fetch ('http://localhost:4000/addtocart',{
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type' : 'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
                }).then((resp)=>resp.json()).then((data)=>console.log(data));              
        }
           
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1 }));
        if(localStorage.getItem('auth-token')){
            fetch ('http://localhost:4000/removefromcart',{
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
               body:JSON.stringify({'itemId':itemId})
            }).then((resp)=>resp.json()).then((data)=>console.log(data))
        }      
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