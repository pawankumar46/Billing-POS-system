import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { startPostProduct } from '../actions/productAction'

const Products = (props) => {
   const dispatch = useDispatch()
   const formik = useFormik({
     initialValues : {
        name : '',
        price : ''
     },
     onSubmit : (formData, {resetForm})=>{
         console.log(formData)
          dispatch(startPostProduct(formData))
           resetForm()
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