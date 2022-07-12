import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { startGetProduct } from '../actions/productAction'
import ProductItem from './ProductItem'

const ProductList = (props) => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetProduct())
    },[dispatch])
    
    const product = useSelector((state)=>{
        return   state.product
    })
  return (
    <div>
        {product.length===0 ? (
            <>
             <h5>No Products Found </h5>
             <p>Add Your Products to Kart</p>
            </>
        ):(
            <>
                <h3>Total Products = {product.length}</h3>
                {product.map((ele ,i)=>{
                    return <ProductItem  key={i} {...ele} />
                })}
            </>
        )}
       
    </div>
  )
}

export default ProductList