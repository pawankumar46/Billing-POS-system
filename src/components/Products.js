import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { startPostProduct } from '../actions/productAction'
import { startEditProduct } from '../actions/productAction'

const Products = (props) => {
  const {_id , handleToggle , name : nam , price : cost } = props
   const dispatch = useDispatch()
   const formik = useFormik({
     initialValues : {
        name : nam ? nam : '',
        price : cost ? cost : ''
     },
     onSubmit : (formData, {resetForm})=>{
         console.log(formData)
         if (nam || cost){
           dispatch(startEditProduct(formData , _id))
            handleToggle()
         } else {
          dispatch(startPostProduct(formData))
          resetForm()
         }
         
     }
   })
  return (
    <div>
       
        <form onSubmit={formik.handleSubmit}>
          <label>Product</label><br/>
          <input type='text' value={formik.values.name} name='name' placeholder='Product name..'
          onChange={formik.handleChange}/> <br/> <br/>
          <label>Cost</label> <br/>
          <input  type="text" value={formik.values.price} name='price' placeholder='Price' 
          onChange={formik.handleChange} /> <br/> <br/>
          <input  type='submit' value='Add'/>
        </form>
    </div>
  )
}

export default Products