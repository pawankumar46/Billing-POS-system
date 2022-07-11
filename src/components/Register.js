import React from 'react'
import axios from 'axios'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import swal from 'sweetalert'
 
 const registerSchema = Yup.object().shape({
    username : Yup.string()
         .min(4)
         .max(20)
         .required("Required...!!") ,
     email : Yup.string()
         .email()
          .required(`Required..!`) ,
     password : Yup.string()
           .min(8)
           .max(64)
           .required(`Required..!`) ,
     businessName : Yup.string()
           .min(6)
            .max(12)
            .required(`Required...!`) ,
     address  : Yup.string()
            .min(10)
            .max(30)
            .required(`Required..!!`)

 })
const Register = (props) => {
     
    const formik = useFormik({
        initialValues : {
            username : '',
            email : '',
            password : '',
            businessName : '',
            address : ''
        } ,
         onSubmit : (formData , {resetForm})=>{
                
                  console.log(formData)
                axios.post(`http://dct-pos-app.herokuapp.com/api/users/register` , formData)
                .then((res)=>{
                  const result = res.data
                  if(result.hasOwnProperty('errors')){
                      alert(result.message)
                  } else {
                      swal('User Registered Successfully ')
                      props.history.push('/login')
                  }
              })
              .catch((err)=>{
                  console.log(err.message)
              })
                
                
               resetForm()
         } ,
        validationSchema : registerSchema ,
        validateOnChange : false
         

    })
  return (
     <div className='row my-5'>
        <h2>Register with Us</h2>
    
    <div className=' col-md-4'>
       

         <form onSubmit={formik.handleSubmit} >

            <label>User-Name</label>  <br/>
            <input type='text' placeholder='Enter your Name' name='username' value={formik.values.username} 
            onChange={formik.handleChange}/>   <br/> <span>{formik.errors.username}</span> <br/> 

             <label>Email</label>  <br/>
            <input type='text' placeholder='Enter your Email' name='email' value={formik.email} 
            onChange={formik.handleChange}/>  <br/> <span>{formik.errors.email}</span> <br/> 

              <label>Password</label>  <br/>
            <input type='password' placeholder='Enter your Password' name='password' value={formik.password} 
            onChange={formik.handleChange}/>  <br/> <span>{formik.errors.password}</span> <br/> 

              <label>Business-Name</label>  <br/>
            <input type='text' placeholder='Enter your Business Name' name='businessName' value={formik.businessName} 
            onChange={formik.handleChange}/>  <br/>  <span>{formik.errors.businessName}</span> <br/> 

             <label>Address</label>  <br/>
            <textarea type='textarea' placeholder='Enter your Address Name' name='address' value={formik.address} 
            onChange={formik.handleChange}></textarea>  <br/> <span>{formik.errors.address}</span> <br/> 

             <input type='submit' value='Register' />
         </form>
    </div>
    </div>
  )
}

export default Register