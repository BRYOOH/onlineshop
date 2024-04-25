import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div className="n-letter">
         <h1>Get Exclusive Offers on your email</h1>
         <p>Subscribe to our NewsLetter and stay updated </p>
         <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
         </div>
    </div>
  )
}

export default NewsLetter