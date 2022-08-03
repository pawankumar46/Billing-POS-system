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
      <div class="container">
             <h2 class="text-center text-white">
                Our Instructors
             </h2>
             <p class="lead text-center text-white ">
                 our instructors  all have 5+ years as a web developer in industry
             </p>
    <div className='text-center'>
    <div class="row g-4">
                <div class="col-md-12">
                    <div class="card bg-light">
                        <div class="card-bady text-center">
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" 
                            class="rounded-circle mb-2 pt-3" alt=""/>
                            <h3 class="card-title mb-2">
                            {users.username}
                            </h3>
                            <p class="card-text">
                            {users.email}
                            </p>
                            <p>
                            {users.businessName}
                            </p>
                            <p>
                            {users.address}
                            </p>
                            <a href="https://twitter.com/i/flow/login"><i class="bi bi-twitter text-dark mx-1"></i></a>
                            <a href="https://www.facebook.com/login"><i class="bi bi-facebook text-dark mx-1"></i></a>
                            <a href="https://www.instagram.com/accounts/login/?"><i class="bi bi-instagram text-dark mx-1"></i></a>
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