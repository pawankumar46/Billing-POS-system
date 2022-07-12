import React, { useEffect } from 'react'
import { startGetUser } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'


const Account = (props) => {

  const dispatch = useDispatch()
   
   useEffect(()=>{
      dispatch(startGetUser())
   },[dispatch])

    const users = useSelector((state)=>{
       return      state.user
    })
  return (
    <div>
    <div className='p-5'>
        <h2> User Info  </h2>
    </div>
    <div className='text-center'>
        <h3>Admin  -- {users.username}</h3>
        <h3>Email  -- {users.email}</h3>
         
    </div>
    </div>    
    
  )
}

export default Account