import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import swal from 'sweetalert'

const loginShema = Yup.object().shape({
      email : Yup.string()
         .email()
         .required(`Provide correct Email`) ,
      password : Yup.string()
          .min(8)
          .max(64)
          .required(`password needed`)
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
  return (
    <div className='row p-5'>
        <h2>Login with Us</h2>
        <div className='col-md-5'>
         <form onSubmit={formik.handleSubmit}>
            <label>Email</label> <br/>
            <input type='text' value={formik.values.email} placeholder ="enter your email"
             name='email' onChange={formik.handleChange} /> {formik.errors.email}  <br/>

            < label>Password</label> <br/>
            <input type='password' value={formik.values.password} placeholder ="enter your password"
             name='password' onChange={formik.handleChange} /> {formik.errors.password} <br/>
            
            <input type='submit' value='Login' />
         </form>
         </div>
    </div>
  )
}

export default Login