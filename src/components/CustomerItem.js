import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startDeleteCus } from '../actions/customerAction'
import EditCustomer from './EditCustomer'


const CustomerItem = (props) => {
   const [toggle , setToggle] = useState()

    const handleToggle=()=>{
       setToggle(!toggle)
    }
     const {_id , name , mobile , email} = props

     const dispatch = useDispatch()
       
    

     const handleRemove=()=>{
        const confirm = window.confirm(`Are You Sure.. ?`)
         if(confirm){
           dispatch(startDeleteCus(_id))
         }
     }
    
  return (
        <div className='col-sm-4'>
                            {toggle  ?  (
                              <>
                            <EditCustomer  
                              _id={_id} name={name} mobile={mobile} handleToggle={handleToggle} email={email}/>
                            <button className='btn btn-4' onClick={handleToggle}><i className="bi bi-trash3-fill"></i></button>
                            </>
                  ) : (
                    <div>
                        
                            <div className='shadow-lg p-3 mb-3 bg-white'> 
                                              <h3>{name}</h3>
                                              <h5>{mobile}</h5>
                                              <h6>{email}</h6>
                                              
                                              <p><button className='btn btn-4-danger' onClick={()=>{
                                                  handleRemove(_id)
                                                }}><i className="bi bi-trash3-fill"></i></button></p>
                                              <p><button className='btn btn-4' onClick={handleToggle}><i className="bi bi-pencil-fill"></i></button></p> 
                            </div>          
                  </div>
                  
                  )}

                      </div>
     
           
   
 
    


  )
 }

export default CustomerItem