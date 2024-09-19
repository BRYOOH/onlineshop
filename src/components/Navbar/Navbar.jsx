import React, { useContext, useState } from 'react'
import './navbar.css'
import cart from '../assets/icons/cart.jpeg'
import logo from '../assets/icons/Logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

export const Navbar = () => {

  const{cartIncrem} = useContext(ShopContext);

  const[title,setTitle] = useState("home")
  return (
    <div className='n'>
        <div className='Logo'>
            <img src={logo} className='img' alt=''/>
            <p>GENERATION TRENDS</p>
        </div>
           <ul className='n-list'>
            <li onClick={()=>
              {setTitle("home")}} ><Link 
              style={{textDecoration: 'none'}} 
              to='/'>
                Home</Link>
                 {title==="home"?<hr/>:<></>}
                 </li>
            <li onClick={()=>
              {setTitle('womens')}}>
                <Link
                style={{textDecoration: 'none'}}
                 to='/womens'>
                  Women</Link>
                  {title==="womens"?<hr/>:<></>}
                  </li>
            <li onClick={()=>
              {setTitle('mens')}}><Link
              style={{textDecoration: 'none'}}
               to='/mens'>Men</Link>
               {title==="mens"?<hr/>:<></>}
               </li>
            <li onClick={()=>
              {setTitle('kids')}}><Link 
              style={{textDecoration: 'none'}}
              to='/kids'> Kids</Link> 
              {title==="kids"?<hr/>:<></>}
              </li>
           </ul>
        <div className='n-cart'>
          {localStorage.getItem('auth-token')?<button onClick={()=>{
            localStorage.removeItem('auth-token');window.location.replace('/');}}>LogOut</button>
            :<Link to='/login'><button>Log in</button></Link>}
           
           <Link to='/cart'><img src={cart} alt=''/></Link> 
            <div className='n-cart-count'>{cartIncrem()}</div> 
            
        </div>

    </div>
  )
}
