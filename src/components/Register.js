import React from 'react'
import axios from 'axios'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import swal from 'sweetalert'
import '../styles.css'
 
 const registerSchema = Yup.object().shape({
    username : Yup.string()
         .min(4)
         .max(20)
         .required(<strong>Username must be provided..!</strong>) ,
     email : Yup.string()
         .email()
          .required(<strong>Email must be provided..!</strong>) ,
     password : Yup.string()
           .min(8)
           .max(64)
           .required(<strong>Password must be provided..!</strong>) ,
     businessName : Yup.string()
           .min(6)
            .max(30)
            .required(<strong>Business Name must be provided..!</strong>) ,
     address  : Yup.string()
            .min(10)
            .max(30)
            .required(<strong>Address must be provided..!</strong>)

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

     const handleBack=()=>{
       props.history.push('/')
     }
     const handleLogin=()=>{
       props.history.push('/login')
     }
  return (
     <div className='justify-content-center m-3'>
        <h4>Register with Us</h4>
    
    <div className='container'>
    <div className='border' >
       

         <form  className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={formik.handleSubmit} >

            <label>User-Name</label>  <br/>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Enter your Name' name='username' value={formik.values.username} 
            onChange={formik.handleChange}/>   <br/> <strong><span className='text-danger'>{formik.errors.username}</span></strong> <br/> 

             <label>Email</label>  <br/>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Enter your Email' name='email' value={formik.email} 
            onChange={formik.handleChange}/>  <br/> <strong><span className='text-danger'>{formik.errors.email}</span></strong> <br/> 

              <label>Password</label>  <br/>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='password' placeholder='Enter your Password' name='password' value={formik.password} 
            onChange={formik.handleChange}/>  <br/> <span className='text-danger'>{formik.errors.password}</span> <br/> 

              <label>Business-Name</label>  <br/>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Enter your Business Name' name='businessName' value={formik.businessName} 
            onChange={formik.handleChange}/>  <br/>  <span className='text-danger'>{formik.errors.businessName}</span> <br/> 

             <label>Address</label>  <br/>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='textarea' placeholder='Enter your Address Name' name='address' value={formik.address} 
            onChange={formik.handleChange}></textarea>  <br/> <span className='text-danger'>{formik.errors.address}</span> <br/> 

             <input className='btn btn-primary rounded-pill' type='submit' value='Register' />
         </form>
               <>
                  <p onClick={handleLogin} >Already Registered User? Click here to <strong>login</strong> </p>
               </>
             <div className='button'>
             <button className='btn btn-4' onClick={handleBack} ><i className="bi bi-skip-backward-btn-fill"></i></button>
             </div>
            
            
            
    </div>
    </div>
    </div>
  )
}

export default Register