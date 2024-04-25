import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import Collecions from '../components/NewCollections/Collecions'
import NewsLetter from '../components/NewsLeter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Collecions/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
