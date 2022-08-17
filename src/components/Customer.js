import React from 'react'
import { useFormik } from 'formik'

import { useDispatch } from 'react-redux'
import { startPostCust } from '../actions/customerAction'
import { startEditCus } from '../actions/customerAction'

const Customer = (props) => {
   const {handleToggle , _id  , name : nam , mobile : phone , email : info} = props
   const dispatch = useDispatch()
 const formik = useFormik({
  initialValues : {
     name : nam ? nam : '',
     mobile : phone ? phone : '',
     email : info ? info : ''
  } ,
   onSubmit : (formData , {resetForm})=>{
      console.log(formData)

       if ( nam || info){
         dispatch(startEditCus(formData, _id))
          handleToggle()
       } else {
        dispatch(startPostCust(formData))
        resetForm()
       }
      
   }
 })
 

  return (
    <div  >
         {nam || info ? (
          
             <div>
              <div className='modal-header'> 
                  <h5 style={{textAlign : 'center'}}> Edit-Form</h5>
              </div>
             
             <form onSubmit={formik.handleSubmit}>
            <label>Name</label> <br/>
            <input type='text' value={formik.values.name} name='name' 
            placeholder='Enter your name'
            onChange={formik.handleChange}/> <br/> <br/>

            <label>Mobile</label><br/>
            <input type='text' value={formik.values.mobile} name='mobile'
            placeholder='Enter your number' 
            onChange={formik.handleChange}/> <br/> <br/>

            <label>Email</label><br/>
            <input type='text' value={formik.values.email} name='email' placeholder='Enter your Email'
              onChange={formik.handleChange}/> <br/> <br/>

              <input type='submit' value='Add' />
           </form>
           </div>
          
         ) : (
          <div  >
          <form onSubmit={formik.handleSubmit}>
           <label>Name</label> <br/>
           <input type='text' value={formik.values.name} name='name' 
           placeholder='Enter your name'
           onChange={formik.handleChange}/> <br/> <br/>

           <label>Mobile</label><br/>
           <input type='text' value={formik.values.mobile} name='mobile'
           placeholder='Enter your number' 
           onChange={formik.handleChange}/> <br/> <br/>

           <label>Email</label><br/>
           <input type='text' value={formik.values.email} name='email' placeholder='Enter your Email'
             onChange={formik.handleChange}/> <br/> <br/>

             <input type='submit' value='Add' />
          </form>
        </div>
         )}
        
         
    </div>
  )
}

export default Customer

