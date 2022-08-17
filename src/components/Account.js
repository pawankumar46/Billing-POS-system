import React, { useEffect } from 'react'
import { startGetUser } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'


const Account = (props) => {

  const dispatch = useDispatch()
   
  //  useEffect(()=>{
  //     dispatch(startGetUser())
  //  },[dispatch])

    const users = useSelector((state)=>{
       return      state.user
    })
  return (
    <div className='display-box justify-center'>
      <div className="container">
             
    <div className='text-center p-5'>
    <div className="row g-4">
                <div className="col-md-12">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" 
                            className="rounded-circle mb-2 pt-3" alt=""/>
                            <h3 className="card-title mb-2">
                            {users.username}
                            </h3>
                            <p className="card-text">
                            {users.email}
                            </p>
                            <p>
                            {users.businessName}
                            </p>
                            <p>
                            {users.address}
                            </p>
                            <a href="https://twitter.com/i/flow/login"><i className="bi bi-twitter text-dark mx-1"></i></a>
                            <a href="https://www.facebook.com/login"><i className="bi bi-facebook text-dark mx-1"></i></a>
                            <a href="https://www.instagram.com/accounts/login/?"><i className="bi bi-instagram text-dark mx-1"></i></a>
                        </div>
                    </div>
                    
                </div>
                 </div>
    </div>

    
             
                 </div>
    </div>    
    
  )
}

export default Account