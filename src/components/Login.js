import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import swal from 'sweetalert'

const loginShema = Yup.object().shape({
      email : Yup.string()
         .email()
         .required(<strong>Provide correct Email</strong>) ,
      password : Yup.string()
          .min(8)
          .max(64)
          .required(<strong>Provide correct Password</strong>)
})
const Login = (props) => {
   const {handleAuth} = props
   const formik = useFormik({
       initialValues : {
         email : "",
         password : ""
       } ,
       onSubmit : (formData, {resetForm})=>{
         console.log(formData)
         axios.post(`http://dct-pos-app.herokuapp.com/api/users/login` , formData)
         .then((res)=>{
          const result = res.data
          if(result.hasOwnProperty('errors')){
            alert(result.errors)
          } else{
            swal('user logged in')
            localStorage.setItem('token' , result.token)
            console.log('token' , result.token)
            props.history.push('/')
               handleAuth()
          }
        })
        .catch((err)=>{
          alert(err.message)
        }
        )
       } ,
       validationSchema : loginShema,
       validateOnChange : false
   })

    const handleRegister=()=>{
        props.history.push('/register')
    }
  return (
     
    <div className='w-full max-w-xs p-4'>
        <h4>Login</h4>
       
        <div  className='form-group p-5'>
           
         <form  className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={formik.handleSubmit} >
           <div  className='mb-4'>
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
         Email
      </label> <br/>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' value={formik.values.email} placeholder ="enter your email"
             name='email' onChange={formik.handleChange} /> <br/><span className=' text-danger'>{formik.errors.email}</span>  <br/>
           </div>


            <div>
            < label>Password</label> <br/>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='password' value={formik.values.password} placeholder ="enter your password"
             name='password' onChange={formik.handleChange} /> <br/> <span className="text-danger">{formik.errors.password}</span>  <br/> <br/>
             </div>
            <input className='btn btn-primary rounded-pill' type='submit' value='Login' />
            
          </form>
           <>
             <p onClick={handleRegister}>Click here to <strong>Register</strong> </p>
           </>
          
         </div>
         </div> 
   
  )
}

export default Login