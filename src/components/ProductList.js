import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
//import { startGetProduct } from '../actions/productAction'
import ProductItem from './ProductItem'

const ProductList = (props) => {
    

    // useEffect(()=>{
    //     dispatch(startGetProduct())
    // },[dispatch])
    
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
            <div> 
            <h4  className='text-end px-4 py-2'>Total customers : {product.length}</h4>
            <div className='row' style={{maxHeight:"400px", overflow:"auto",padding:"20px 10px", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
            
               
                {product.map((ele ,i)=>{
                    return <ProductItem  key={i} {...ele} />
                })}
            </div>
            </div>
        )}
       
    </div>
  )
}

export default ProductList