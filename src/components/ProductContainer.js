import React from 'react'
import Products from './Products'
import ProductList from './ProductList'

const ProductContainer = (props) => {
  return (
    <div className='row'>
         <h2 className="product p-5"> Add Your Products </h2>
       <div className='col-md-4'>
         <Products  />
       </div>
       <div className='col-md-8'>
        <ProductList />
       </div>
    </div>
  )
}

export default ProductContainer