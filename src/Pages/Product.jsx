import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import Description from '../components/Description/Description';
import RelatedProduct from '../components/RelatedProducts/RelatedProduct';

const Product = () => {

  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=>
    e.id === Number(productId)
  ); 
  return (
    <div>
     <Breadcrum product={product}/>
     <ProductDisplay product={product}/>
     <Description/>
     <RelatedProduct product={product}/>
    </div>
  )
}

export default Product
