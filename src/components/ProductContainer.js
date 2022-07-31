import React from 'react'
import Products from './Products'
import ProductList from './ProductList'

const ProductContainer = (props) => {
  return (
    <div className='row'>
         <h2 className="product"> Add Your Products </h2>
       <div className='col-md-4 p-5'>
         <Products  />
       </div>
       <div className='col-md-8'>
         <div className='row'>
         <ProductList />
         </div>
       
       </div>
    </div>
  )
}

export default ProductContainer